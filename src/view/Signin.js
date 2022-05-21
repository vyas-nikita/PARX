
import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Keyboard,
  Dimensions, ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { PagerBg } from '@images';

import Constants from '../assets/constants';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../component/Header';
import { AppThemeButton } from '@components';
import FetchApiData from '../fetchapi/FetchApi';


export default function Signin({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const handleSubmit = () => {
    var emailValid = false;
    if (email.length == 0) {
      setEmailError("Email is required");
    }
    else if (email.length < 6) {
      setEmailError("Email should be minimum 6 characters");
    }
    else if (email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces');
    }
    else {
      setEmailError("")
      emailValid = true
    }

    var passwordValid = false;
    if (password.length == 0) {
      setPasswordError("Password is required");
    }
    else if (password.length < 6) {
      setPasswordError("Password should be minimum 6 characters");
    }
    else if (password.indexOf(' ') >= 0) {
      setPasswordError('Password cannot contain spaces');
    }
    else {
      setPasswordError("")
      passwordValid = true
    }

    if (emailValid && passwordValid) {
      setEmail("");
      setPassword("");
      callAPI()
    }
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
      setKeyboardStatus("Keyboard Shown");

    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
      setKeyboardStatus("Keyboard Hidden");

    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const callAPI = () => {

    var API = Constants.APIS.LOGIN;
    var dictParam = {
      email: email,
      password:password,
      deviceToken: "cs0EdKZZY2k:APA91bGGYKF6QJjcjeapHQQuMVG1QBCFbRvlnP0UEzrAuUnDDHR4f6MYWReRlYcJuXwAjTyICK1QqNltLjiHxRvhikOILK2kWd25m-RyhxySbvzp6TDNtUc4kg--tgWDaTi2qv70htsF"
    };
    try {
      console.log('params-->>' + JSON.stringify(dictParam));
      FetchApiData(API, 'PUT', false, (dictParam))
        .then(function(responseJson)  {
          //Hide Loader
          console.log(
            ' response Success-->>' + JSON.stringify(responseJson),
          );
          // If server response message same as Data Matched
          if (responseJson.statusCode == '200') {
            console.log(
              ' response Success-->>' + JSON.stringify(responseJson),
            );

          } else {
            alert(responseJson.msg); 
          }
        })
        .catch((error) => {

        });
    } catch (e) {
      console.log('Failed to fetch the data from storage' + e);
    }
  };
  return (

    <ImageBackground style={styles.container}
      resizeMode="stretch"
      source={PagerBg}>
      <View style={{ flex: 1, }}>
        <Header title={Constants.APP_STRINGS.SIGN_IN} />

        <Text style={styles.text}>{Constants.APP_STRINGS.SIGN_IN_HEADING}</Text>
        <View
          style={{ flex: 1, padding: 10 }}>
          <View
            style={styles.textVIew}>
            <Text style={styles.textEmail}>{Constants.APP_STRINGS.EMAIL}</Text>
            <TextInput style={styles.buttonStyle}
              onChangeText={text => setEmail(text)} value={email}
              returnKeyType={"next"}
              placeholder="Email"></TextInput>
            {emailError.length > 0 &&
              <Text style={{color:'red'}}>{emailError}</Text>
            }
            <Text style={styles.textPassword}>{Constants.APP_STRINGS.PASSWORD}</Text>
            <TextInput style={styles.buttonStyle}
              placeholder="Password"
              returnKeyType={"done"}
              maxLength={30}
              onChangeText={text => setPassword(text)} value={password}
              textContentType={'password'} multiline={false} secureTextEntry={true}
              autoCapitalize="none"
              onSubmitEditing={Keyboard.dismiss}
              autoCorrect={false}>

            </TextInput>
            {passwordError.length > 0 &&

              <Text style={{color:'red'}}>{passwordError}</Text>
            }
          </View>
          {!isKeyboardVisible ?
            <View style={styles.bottomView}>
              <AppThemeButton title={Constants.APP_STRINGS.LOGIN}
                onPressButton={() => {
                  handleSubmit()
                  // callAPI()
                  // navigation.navigate("BottomNavigation")
                }}
                style={styles.buttonCStyle}
                textSyle={{ color: 'white', fontFamily: Constants.APP_FONTS.C_BOLD, fontSize: 16 }} />

              <TouchableOpacity
                style={{ position: 'absolute', alignSelf: 'center', justifyContent: 'center' }}
                onPress={() => {
                  navigation.navigate("ForgotPassword")
                }}>
                <Text style={styles.textBottom}>{Constants.APP_STRINGS.FORGOT_PASSWORD}</Text>
              </TouchableOpacity>
            </View> : null}

        </View>
      </View>
    </ImageBackground >

  );
}

const styles = StyleSheet.create({
  textVIew: {
    marginLeft: 10,
    marginRight: 10,
  },
  textBottom: {

    alignSelf: 'center',
    fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
    fontSize: 16
  },
  bottomView: {
    color: 'white',
    alignSelf: 'center',
    marginLeft: 20,
    position: 'absolute',
    bottom: 120,
    width: Dimensions.get('window').width - 50,
  },
  buttonCStyle: {
    color: 'white',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    alignSelf: 'center',
    marginLeft: 20,
    position: 'absolute',
    bottom: 20,
    width: Dimensions.get('window').width - 50,
  },
  buttonStyle: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: Constants.APP_COLOR.BALCK,
    borderColor: Constants.APP_COLOR.GREEN_COLOR,
    fontSize: 14,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width - 50,
  },
  flex: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
    backgroundColor: 'trasnparent'
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    left: 0,
    position: 'absolute'
  },
  progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },

  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginTop: 30,
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