import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Switch, FlatList, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import {Picker} from '@react-native-community/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from 'native-base';
import { Button, Text, Overlay, Divider } from 'react-native-elements';
import RecomendationComponent from '../components/RecomendationComponent';
import { Context } from '../context/RecomendacionesContext';

const SettingsScreen = ({navigation}) =>{

  const [frecuencia, setFrecuencia] = useState('');
  const [apli, setApli] = useState(false);
  const toggleApliSwitch = () => setApli(prev => !prev)
  const [mail, setMail] = useState(false);
  const toggleMailSwitch = () => setMail(prev => !prev)
  const [bib, setBib] = useState(false);
  const toggleBibSwitch = () => setBib(prev => !prev)

  const {state, getRecommendation} = useContext(Context);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([

    {label: 'Semanal', value: 'Semanal'},
    {label: 'Cada 2 semanas', value: 'Cada 2 semanas'},
    {label: 'Mensual', value: 'Mensual'},
    {label: 'Cada 2 meses', value: 'Cada 2 meses'},
  ]);

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

  return(
    <View style={styles.viewStyle}>
    <ScrollView nestedScrollEnabled={true}>
        <View style={styles.dividerStyle}>
            <Text style={styles.dividerHeaderStyle}>
              Frecuencia
            </Text>
        </View>

        <View style={styles.freqOptContStyle}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.freqOptLabel}>
                Cada cuánto quisieras
            </Text>
            <Text style={styles.freqOptLabel}>
                recibir notificaciones
            </Text>
          </View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            zIndex={0}
            containerStyle={styles.dropDownStyle}
            dropDownContainerStyle={{
                backgroundColor: '#f1f1f1'
            }}
            modalContentContainerStyle={{
                backgroundColor: "#f1f1f1"
            }}
            modalProps={{
              transparent: false
            }}
            textStyle={{ fontSize: 14}}
            />
        </View>
        <View style={styles.bibSwitchCont}>
            <Text style={styles.freqOptLabel}>
                Al entrar a la biblioteca
            </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#f6cc47" }}
                thumbColor={bib ? "#113293" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleBibSwitch}
                value={bib}/>
        </View>

        <View style={styles.dividerStyle}>
            <Text style={styles.dividerHeaderStyle}>
              Medios
            </Text>
        </View>


        <View style={styles.medOptContStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.freqOptLabel}>
                Aplicación
            </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#f6cc47" }}
                thumbColor={apli ? "#113293" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleApliSwitch}
                value={apli}
            />
          </View>
        </View>
        <View style={styles.medOptContStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.freqOptLabel}>
                Correo
            </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#f6cc47" }}
                thumbColor={mail ? "#113293" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleMailSwitch}
                value={mail}
            />
          </View>
        </View>

        <View style={styles.dividerStyle}>
            <Text style={styles.dividerHeaderStyle}>
              Historial
            </Text>
        </View>
        <FlatList
          nestedScrollEnabled={true}
          style={{ marginBottom: 0 }}
          showsVerticalScrollIndicator={false}
          data={state.recommendations}
          keyExtractor={(doc) => doc.location}
          renderItem={({ item }) => {
            return(
              <RecomendationComponent data={item}/>
            );
          }}
        />
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    marginBottom: 30,
    backgroundColor: '#fff'

  },
  dividerStyle:{
    backgroundColor:"#f1f1f1",
    height:44,
    display: 'flex',
    justifyContent: 'center',
    zIndex:9

  },
  dividerHeaderStyle:{
    color: "#999",
    fontSize:19,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  freqOptContStyle:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    zIndex: 10
  },
  freqOptLabel:{
    fontSize: 18,
    fontWeight: '600'

  },
  freqOptPickerStyle:{
    height: 40,
    width: 150,
    color: '#f1f1f1'
  },
  dropDownStyle: {
    width: 150,
    backgroundColor: '#f1f1f1'
  },
  medOptContStyle:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 15,
    zIndex: 8
  },
  bibSwitchCont:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    zIndex: 10
  }

});

export default SettingsScreen;
