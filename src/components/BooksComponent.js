import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, LogBox, RefreshControl } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FAB, Icon, CheckBox, Button, Text, Divider } from 'react-native-elements';
import { justifyContent } from 'styled-system';
import { Context as LibraryContext} from '../context/BibliotecaContext';


const BooksComponent = (props) => {

  const book = props.book;
  const [saved, setSaved] = useState(false);
  const { saveBook } = useContext(LibraryContext);

  return (
    <View style={styles.fullContainer}>
      <View style={styles.generalContainer}>
        <View style={styles.infoContainer}>
            <Text style={styles.titleTextstyle}>
                {book.title}
            </Text>
            <Text style={styles.autorTextstyle}>
                {book.autor}
            </Text>
            <Text style={styles.yearTextstyle}>
                {book.year}
            </Text>
        </View>
        <View style={styles.checkedContainer}>
            <CheckBox
                checked={saved}
                onPress={()=>{
                  setSaved(!saved);
                  saveBook({itemId: book.itemId});
                }}
                checkedIcon={
                    <Icon
                        name="radio-button-checked"
                        type="material"
                        color="#f6cc47"
                        size={25}
                        iconStyle={{ marginRight: 10 }}
                    />
                }
                uncheckedIcon={
                    <Icon
                        name="radio-button-unchecked"
                        type="material"
                        color="#01339b"
                        size={25}
                        iconStyle={{ marginRight: 10 }}
                    />
                }
            />
        </View>
      </View>
      <Divider/>
    </View>
  );

};

const styles = StyleSheet.create({
  fullContainer:{
    flexDirection: 'column'
  },

  generalContainer:{
    flexDirection:'row',
    margin: 8,
  },
  infoContainer:{
    flexDirection:'column',
    width:340
  },
  checkedContainer:{
    margin: 8,
    justifyContent: 'center'
  },
  buttonChecked:{
    width: 20,
    height: 50,
    backgroundColor: '#01339b',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  titleTextstyle:{
    fontSize:16,
    color: '#333',
    fontWeight: 'bold',
  },
  autorTextstyle:{
    fontSize:14,
    color: '#303030',
  },
  yearTextstyle:{
    fontSize:12,
    color: '#434e4e',
  }


});

export default BooksComponent;
