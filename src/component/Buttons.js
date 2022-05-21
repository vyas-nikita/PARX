import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import constants from '../assets/constants';

export const AppThemeButton = ({
  title,
  onPressButton,
  style,
  textSyle
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonHover, { flexDirection: 'row' }, style]}
      onPress={onPressButton}>
      <Text style={[styles.textStyle,textSyle, { textAlign: 'center' }]}>{title}</Text>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  buttonHover: {
    height: 50,
    width: Dimensions.get('window').width,
    borderRadius: 10,
    backgroundColor: 'rgba(25,140,251,1.0)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 5,
    borderColor:'#FFFFFF',
    shadowOffset: { width: 1, height: 5 },
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center'
  },
  textStyle: {
    color: '#5A8A4D',
    fontSize: 16,
    fontFamily:constants.APP_FONTS.C_BOLD,
    textAlign:'center'
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
