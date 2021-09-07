import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem from './CarouselCardItem'

const CarouselCards = (props) => {
  const isCarousel = React.useRef(null)
  const {data} = props;
  console.log(data)
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.contStyle}>
        <View style={styles.nameStyle}>
            <Text style={styles.greet}>
              Hola Usuario!
            </Text>
        </View>
        <Text style={styles.rec}>
          En la biblioteca hemos encontrado que te puede interesar este material.
        </Text>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={280}
        sliderHeight = {250}
        itemWidth={280}
        itemHeight={100}
        inactiveSlideShift={0}
        useScrollView={true}
      />
        <Text style={styles.feedback}>
            Te gustó la recomendación?
        </Text>
        <Text style={styles.feedback}>
            Déjanoslo saber!
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contStyle:{
    height: 480,
    width: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameStyle:{
    height: 72,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B2991'
  },
  greet:{
    textAlign:'center',
    fontSize: 36,
    fontWeight:'bold',
    color: '#EDCE2F'
  },
  rec:{
    margin: 8,
    fontSize: 18,
  },
});

export default CarouselCards
