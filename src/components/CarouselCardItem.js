import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import RecomendationComponent from './RecomendationComponent'

const CarouselCardItem = ({ item, index }) => {
  const render = Object.values(item)

  console.log('Name en CarouselCardItem' + item['name'].toString())

  return (
    <RecomendationComponent data = {item}/>
  )
}

export default CarouselCardItem;
