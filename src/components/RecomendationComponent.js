import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Text, Overlay, Input } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import { AntDesign } from '@expo/vector-icons';

const RecomendationComponent = (props) =>{

  const document = props.data;
  const [feedback, setFeedback] = useState(false);

  return(
    <View style={styles.contStyle}>
        <Text style={styles.title}>
          {document.title}
        </Text>
        <Text style={styles.authors}>
          {document.author}
        </Text>
        <Text style={styles.doi}>
          Ubicación: {document.location}
        </Text>
        <View style={styles.feedbackContainer}>
          <TouchableOpacity style={{marginHorizontal: 24}} onPress={()=>console.log("uncool")}>
            <AntDesign name="dislike1" size={32} color="#e32d55" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 24}} onPress={()=>console.log("cool")}>
            <AntDesign name="like1" size={32} color="#47d679" />
          </TouchableOpacity>
        </View>

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
    marginHorizontal: 8,
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
  },
  feedbackContainer:{
    marginTop: 15,
    marginVertical: 4,
    flexDirection: 'row',
    alignContent:'space-between'
  }

});

export default RecomendationComponent;
