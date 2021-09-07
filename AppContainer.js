import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import  HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { navigationRef, navigate } from './src/rootNavigator';

const Stack = createStackNavigator();

const stackOptions = (nombreScreen) => {

    return ({
        headerStyle: {
            backgroundColor: '#01339b',
        },
        headerTitle: [nombreScreen],
        headerTitleStyle: {
            color: '#FFF',
            fontSize: 24,
        },
      headerLeft: () => {
        if(nombreScreen==='Settings'){
          return(
           <View style={{ marginLeft: 20 }}>
                <TouchableOpacity
            onPress={() => navigate('Home')}>
                    <MaterialIcons name="arrow-back-ios" size={28} color="#3c82f6" />
                </TouchableOpacity>
            </View>
          )}
        else{
          return(
           <View style={{ marginLeft: 20 }}>
                <TouchableOpacity
            onPress={() => navigate('Settings')}>
                    <MaterialIcons name="menu" size={28} color="#3c82f6" />
                </TouchableOpacity>
            </View>
          )}
      }
    });
}


const AppContainer = () => {
  return(
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name = 'Home'
          component = {HomeScreen}
          options = { stackOptions('') }
          />
        <Stack.Screen
          name = 'Settings'
          component = {SettingsScreen}
          options = { stackOptions('Settings') }
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
