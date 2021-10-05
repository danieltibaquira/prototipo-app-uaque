import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import RecomendationComponent from './RecomendationComponent'

const CarouselCardItem = ({ item, index }) => {

  console.log('Name en CarouselCardItem' + item)

  return (
    <RecomendationComponent data = {item}/>
  )
}

export default CarouselCardItem;
