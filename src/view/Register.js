
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
  ScrollView
} from 'react-native';
import { PagerBg } from '@images';
import Header from '../component/Header';
import Constants from '../assets/constants';
import { TextInput } from 'react-native-gesture-handler';

import { AppThemeButton, TextFields } from '@components';


export default function Register({ navigation }) {

  return (

    <ImageBackground style={styles.container}
      resizeMode="stretch"
      source={PagerBg}>
      <View style={styles.container}>
        <Header title={Constants.APP_STRINGS.CREATE_YOUR_AC} />
        <Text style={styles.text}>{Constants.APP_STRINGS.REGISTARTION_HEADING}</Text>
        <ScrollView
          keyboardShouldPersistTaps='handled'
          contentContianerStyle={{ backgroundColor: 'transaprent', }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.scrollViewContainer}>
            <View style={{ flex: 1, backgroundColor: 'transaprent', }}>
              <View
                style={{ flex: 1, }}>
                <Text style={styles.textEmail}>{Constants.APP_STRINGS.USER_NAME}</Text>
                <TextInput style={styles.buttonStyle}
                  placeholder="Name"></TextInput>

                <Text style={styles.textPassword}>{Constants.APP_STRINGS.EMAIL}</Text>
                <TextInput style={styles.buttonStyle}
                  placeholder="Email"></TextInput>
                <Text style={styles.textPassword}>{Constants.APP_STRINGS.PASSWORD}</Text>
                <TextInput style={styles.buttonStyle}
                  placeholder="Password"
                  maxLength={30}
                  textContentType={'password'} multiline={false} secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}></TextInput>
                <Text style={styles.textPassword}>{Constants.APP_STRINGS.CONFIRM_PASSWORD}</Text>
                <TextInput style={styles.buttonStyle}
                  placeholder="Confirm Password"
                  maxLength={30}
                  textContentType={'password'} multiline={false} secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}></TextInput>

                <AppThemeButton title={Constants.APP_STRINGS.CRAETE_ACCOUNT}

                  style={styles.buttonCStyle}
                  textSyle={styles.buttonText} />
                <TouchableOpacity
                  onPress={() => {
                    navigation.pop();
                    navigation.navigate("Signin")
                  }}>
                  <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textBottom}>{Constants.APP_STRINGS.ALREADY_AC}</Text>
                    <Text style={styles.textSBottom}>{" " + Constants.APP_STRINGS.SIGN_IN}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View >
    </ImageBackground >

  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'transaprent',
    flex: 1,
    //justifyContent: 'center',

  },
  root: {

    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'transaprent',
  },
  textBottom: {
    alignSelf: 'center',
    fontFamily: Constants.APP_FONTS.REGULAR,
    fontSize: 16,
    marginTop: 30,
    marginBottom: 20
  },
  textSBottom: {
    alignSelf: 'center',
    fontFamily: Constants.APP_FONTS.REGULAR,
    fontSize: 16,
    marginTop: 30,
    marginBottom: 20,
    color: Constants.APP_COLOR.BALCK,
    textDecorationLine: 'underline'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Constants.APP_FONTS.C_BOLD
  },
  buttonCStyle: {
    color: 'white',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    alignSelf: 'center',
    marginTop: 50,

    width: Dimensions.get('window').width - 50,
  },
  buttonStyle: {
    color: 'black',
    borderColor: Constants.APP_COLOR.GREEN_COLOR,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,
    fontFamily: Constants.APP_FONTS.REGULAR,
    fontSize: 14,
    width: Dimensions.get('window').width - 50,
  },
  flex: {
    flex: 1,
  },

  container: {
    alignContent: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0
  },
  progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },

  text: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 30,
    textAlign: 'center',
    paddingRight: 30
  },
  textEmail: {
    fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
    fontSize: 14,
    marginTop: 60,
    paddingLeft: 5
  },
  textPassword: {
    fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
    fontSize: 14,
    marginTop: 25,
    paddingLeft: 5
  },
  textRight: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    alignSelf: 'flex-end',
    paddingRight: 10,
    fontFamily: 'OpenSans-Bold',
    color: Constants.APP_COLOR.TEXT_GREEN
  },
  textLeft: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    fontFamily: 'OpenSans-Bold',
    color: Constants.APP_COLOR.TEXT_GREEN
  },
  imageView: {
    height: 180,
    width: 350
  },
  title: {
    fontFamily: "Comfortaa-Bold",
    color: Constants.APP_COLOR.TEXT_GREEN,
    fontSize: 24,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },
  paginationContainer: {
    bottom: 30,
    flex: 1,
    alignItems: 'center', justifyContent: 'center'
  },
  paginationDots: {
    height: 16,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#E4E4E4',
    marginLeft: 5, marginRight: 5
  },
});