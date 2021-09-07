import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Text, Overlay, Input } from 'react-native-elements';
import StarRating from 'react-native-star-rating';

const RecomendationComponent = (props) =>{

  const document = props.data;

  return(
    <View style={styles.contStyle}>
        <Text style={styles.title}>
          {document.name}
        </Text>
        <Text style={styles.authors}>
          {document.authors}
        </Text>
        <Text style={styles.doi}>
          {document.doi}
        </Text>
        <StarRating
            maxStars={5}
            rating={document.feedback}
            starSize={32}
            starStyle={styles.starsStyle}
            buttonStyle={{ margin: 8 }}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  contStyle:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#00339B',
    borderWidth: 2,
  },
  title:{
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
    marginHorizontal: 8
  },
  authors:{
    fontSize: 14,
    marginHorizontal: 8
  },
  doi:{
    fontSize: 12,
    marginHorizontal: 8
  },
  starsStyle:{
    color: '#edce2e',
  }

});

export default RecomendationComponent;
