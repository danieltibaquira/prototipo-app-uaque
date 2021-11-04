import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Text, Overlay, Input } from 'react-native-elements';
import CarouselCards from '../components/CarouselCard';
import { Context } from '../context/RecomendacionesContext';

const HomeScreen = ({navigation}) =>{
  const background = require('../../assets/home_background.jpeg');
  const [visi, setVisi] = useState(false);

  const {state, getRecommendation} = useContext(Context);

  useEffect(() =>{
    getRecommendation();
  }, [state.recommendations.length]);

  // console.log(state.recommendations);

  const openRecModal = () =>{
    setVisi(!visi);
  }

  const RecomendationModal = (props) => {
    return(
      <Overlay
        isVisible={visi}
        onBackdropPress={openRecModal}
        overlayStyle={styles.overlayStyle}>
        <CarouselCards data={state.recommendations}/>
      </Overlay>
    );
  }

  return(
    <View>
      <ImageBackground source = {background} style={{width:'100%', height:'100%'}}>
        <Button
          title="Recomiéndame Algo"
          buttonStyle={styles.buttonRec}
          onPress={openRecModal}
        />
        <RecomendationModal onClose={openRecModal}/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRec: {
    width: 200,
    height: 50,
    backgroundColor: '#01339b',
    marginTop: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  }

});

export default HomeScreen;
