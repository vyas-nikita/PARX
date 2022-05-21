import React, { useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Animated,
    Dimensions, ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';
import { PagerBg, good, icLocation, leaf, time } from '@images';

import Constants from '../assets/constants';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../component/Header';
import { AppThemeButton } from '../component/Buttons';
import Slider from '@react-native-community/slider';


export default function FinalScreen({ navigation }) {

    return (

        <View style={{ flex: 1,backgroundColor:Constants.APP_COLOR.BG_COLOR }}>
            <Header />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{Constants.APP_STRINGS.GREATE_WORK}</Text>
                <Text style={[styles.titleSub,{textAlign:'center'}]}>{Constants.APP_STRINGS.HAPPY_MSG}</Text>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <Image style={{ alignSelf: 'center', marginBottom: 50 }} source={good}></Image>
                   
                </View>
            </View>
            <View style={{flex:0.3}}>
            <AppThemeButton title={Constants.APP_STRINGS.BACK_TO_HOME}
                onPressButton={() => {
                   navigation.navigate("Home")
                }}
                style={styles.buttonCStyle}
                textSyle={{ color: 'white' }} />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        color: Constants.APP_COLOR.GREEN_COLOR,
        fontSize: 24,
        fontFamily: Constants.APP_FONTS.C_BOLD
    },
    titleSub: {
        alignSelf: 'center',
        color: Constants.APP_COLOR.BALCK,
        fontSize: 16,
        marginTop: 10,
        padding:20,
        fontFamily: Constants.APP_FONTS.REGULAR
    },
    container: {
        alignContent: 'center',
        flex: 1,
        left: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    buttonCStyle: {
        color: 'white',
        backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
        alignSelf: 'center',
        marginLeft: 20,
     
        width: Dimensions.get('window').width - 50,
    },
    textBottom: {

        alignSelf: 'center',
        fontFamily: Constants.APP_FONTS.REGULAR,
        fontSize: 16
      },
});