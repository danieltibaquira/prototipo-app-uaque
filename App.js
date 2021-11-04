import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import AppContainer from './AppContainer';
import { Platform } from 'react-native';
import {Provider as RecommendationsProvider} from './src/context/RecomendacionesContext';
import {Provider as LibraryProvider} from './src/context/BibliotecaContext';
import {Provider as GroupProfileProvider} from './src/context/PerfilGrupalContext';

export default function App() {

  //Identificancion para el dispositivo, permite recibir la notificacion
  const [expoPushToken, setExpoPushToken] = useState('');
  //Objeto que se renderiza en el banner
  const [notification, setNotification] = useState(false);

  const notificationListener = useRef();
  const responseListener = useRef();

  //Manejo de las notificaciones
  Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    }),
  });

  //Socket publish subscribe para identificar la ubicación del usuario
  const locSocket = new WebSocket(
      'ws://'
      + '1efd-190-27-49-167.ngrok.io'
      + '/ws/loc/biblioteca'
  );

  locSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log(data.message);

      if(data.message==='biblioteca'){
        console.log("ESTOY EN LA BIBLIOTECA");
        schedulePushNotification();
      }
  };


  useEffect(() => {
    //Esto nos permite generar el token
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    //Para cuando se reciba una notificacion
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);




  return (
    <GroupProfileProvider>
      <LibraryProvider>
        <RecommendationsProvider>
          <AppContainer />
        </RecommendationsProvider>
      </LibraryProvider>
    </GroupProfileProvider>
  );
}

//Funcion que se llama para que se envie la notificacion
// 2 segundos despues de que se tenga que el usuario esta
// En la biblioteca
const schedulePushNotification = async() =>{
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Te recomendamos este material 📚",
      body: 'Ingresa a la app y descubre nuevo material bibliográfico que la biblioteca tiene para ti.',
    },
    trigger: { seconds : 1 }
  });
}

//De aca es de donde sacamos los permisos y el token
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
