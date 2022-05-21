import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

import { Back } from '../images';
import Constants from '../assets/constants';


export default function Header({
  title,
  onPressButton,
  style,
  textSyle
}) {
  return (

    <View style={[styles.buttonHover, { flexDirection: 'row',justifyContent:'center',alignItems:'center' }, style]}>
      <TouchableOpacity
        onPress={onPressButton}>
        <Image  style={{alignSelf:'center'}} source={Back}></Image>
      </TouchableOpacity>
      <Text style={[styles.textStyle, textSyle,{ textAlign: 'center'}]}>{title}</Text>
    </View>

  );
};



const styles = StyleSheet.create({
  buttonHover: {
    height: 80,
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textStyle: {
    fontFamily: "Comfortaa-Bold",
    color: Constants.APP_COLOR.TEXT_GREEN,
    fontSize: 24,
    alignSelf:'center',
    flex:1,
    paddingLeft: 20,
    paddingRight: 20,
   
  },

  textAddressStyle: {
    color: 'white',
    fontSize: 14,
  },
  emptyDataSetStyle: {
    color: 'gray',
    fontSize: 13,

    position: 'absolute',
    alignSelf: 'center',
    elevation: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    top: Dimensions.get('window').height / 2 - 40,
  },
});
