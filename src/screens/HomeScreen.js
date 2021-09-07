import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Text, Overlay, Input } from 'react-native-elements';
import CarouselCards from '../components/CarouselCard';

const HomeScreen = ({navigation}) =>{
  const background = require('../../assets/home_background.jpeg');
  const [visi, setVisi] = useState(false);

  const fakeDocs = [
    {
        name: "Mip-NeRF: A Multiscale Representation for Anti-Aliasing Neural Radiance Fields.",
        authors: "Jonathan T. Barron, Ben Mildenhall, Matthew Tancik, Peter Hedman, Ricardo Martin-Brualla, Pratul P. Srinivasan ",
        doi: "DOI:2103.13415v2",
        feedback: 5.0
    },
    {
        name: "Towards Real-World Blind Face Restoration with Generative Facial Prior",
        authors: "Xintao Wang, Yu Li, Honglun Zhang, Ying Sha",
        doi: "DOI:2103.13415v2",
        feedback: 4.6
    },
    {
        name: "NerfingMVS: Guided Optimization of Neural Radiance Fields for Indoor Multi-view Stereo",
        authors: "Yi Wei, Shaohui Liu, Yongming Rao, Wang Zhao, Jiwen Lu, Jie zhou",
        doi: "DOI:2103.13415v2",
        feedback: 4.2
    },
  ];

  const openRecModal = () =>{
    setVisi(!visi);
  }

  const RecomendationModal = (props) => {
    return(
      <Overlay
        isVisible={visi}
        onBackdropPress={openRecModal}
        overlayStyle={styles.overlayStyle}>
        <CarouselCards data={fakeDocs}/>
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
