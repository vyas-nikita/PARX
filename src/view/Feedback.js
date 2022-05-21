import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Dimensions, ImageBackground,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { PagerBg, good, icLocation, leaf, time } from '@images';

import Constants from '../assets/constants';

import Header from '../component/Header';
import { AppThemeButton } from '../component/Buttons';


export default function Timer({ navigation }) {

  return (


    <View style={{ flex: 1, backgroundColor: Constants.APP_COLOR.BG_COLOR }}>
      <Header />
      <Text style={styles.titleSub}>{Constants.APP_STRINGS.TELL_US}</Text>
      <TextInput style={styles.buttonStyle}
        placeholder=""
        maxLength={30}
        autoCapitalize="none"
        autoCorrect={false}>

      </TextInput>
      <AppThemeButton title={Constants.APP_STRINGS.DONE}
        onPressButton={() => {
          navigation.navigate("FinalScreen")
        }}
        style={styles.buttonCStyle}
        textSyle={{color:'white'}} />
      <TouchableOpacity
        style={{ marginTop: 20, alignSelf: 'center', justifyContent: 'center', }}
        onPress={() => {

        }}>
        <Text style={styles.textBottom}>{Constants.APP_STRINGS.SKIP}</Text>
      </TouchableOpacity>

    </View>


  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: Constants.APP_FONTS.C_BOLD,
    color: 'white',
    fontSize: 16,
    alignSelf: 'center'
  },
  buttonStyle: {
    color: 'black',
    borderColor: Constants.APP_COLOR.GREEN_COLOR,
    backgroundColor: 'white',
    height: 350,
    alignSelf: 'center',
    textAlignVertical: 'top',
    marginTop: 50,
    borderRadius: 10,
    padding: 20,
    width: Dimensions.get('window').width - 50,

  },
  container: {
    alignContent: 'center',
    flex: 1,
    left: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  titleSub: {
    alignSelf: 'center',
    color: Constants.APP_COLOR.BALCK,
    fontSize: 16,
    marginTop: 10,
    fontFamily: Constants.APP_FONTS.REGULAR
  },
  buttonCStyle: {
    color: 'white',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    alignSelf: 'center',
    marginTop: 40,
    width: Dimensions.get('window').width - 50,
  },
  textBottom: {

    alignSelf: 'center',
    fontFamily: Constants.APP_FONTS.REGULAR,
    fontSize: 16
  },
});