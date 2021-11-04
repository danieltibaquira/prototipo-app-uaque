import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import {
    Feather,
    MaterialCommunityIcons,
    FontAwesome
} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.barStyle}>
                <Feather name="search" style={styles.iconStyle} />
                <TextInput
                    placeholder="Busca tus libros favoritos"
                    placeholderTextColor="#8f8f8f"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={term}
                    onChangeText={(newTerm) => onTermChange(newTerm)}
                    onEndEditing={() => onTermSubmit()} />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({

    viewStyle: {
        flexDirection: "row",

    },

    barStyle: {
        marginVertical:10,
        marginHorizontal: 10,
        backgroundColor: "#e4e4e4",
        height: 35,
        borderRadius: 74.4,
        flexDirection: "row",
        alignSelf: 'center',
        flex: 1,
    },

    buttonStyle: {
        marginTop: 25,
        marginBottom: 10,
        height: 30,
        marginHorizontal: 9,
        flexDirection: "row",
    },

    inputStyle: {
        color: "#000",
        fontSize: 18,
    },

    iconStyle: {
        color: "#000",
        fontSize: 25,
        alignSelf: "center",
        marginHorizontal: 15,
    },

    iconsExtraStyle: {
        color: "#000",
        fontSize: 27,
        alignSelf: "center",
        marginHorizontal: 7,
    },
});

export default SearchBar;
