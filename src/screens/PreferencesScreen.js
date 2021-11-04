import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Switch, FlatList, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context } from '../context/BibliotecaContext';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResultsBooks';
import BooksComponent from '../components/BooksComponent';
import { FAB, Icon, CheckBox, Button, Text, Divider } from 'react-native-elements';
import { Context as LibraryContext } from '../context/BibliotecaContext';

const PreferencesScreen = ({navigation}) =>{

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const { state, savePreferences } = useContext(LibraryContext);

    return(
      <View style={styles.viewStyle}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <FlatList
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.itemId}
                renderItem={({ item }) => {
                    return <BooksComponent book={item} />
                }}
            />
            <FAB
                visible={true}
                onPress={() => {
                    console.log("Ids to save", state.saveBooks);
                    savePreferences({preferences: state.saveBooks});
                    setTerm('');
                    searchApi('');
                }}
                placement="right"
                title="GUARDAR"
                icon={{ name: 'check', color: '#f6cc47' }}
                style={{marginBottom:40}}
                color={"#01339b"}
            />
        </View>
    );
}

const styles =  StyleSheet.create({
    viewStyle:{
        flex:1,
        alignItems: 'center',
    },

});

export default PreferencesScreen;
