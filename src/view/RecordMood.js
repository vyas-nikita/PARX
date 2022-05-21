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

;
export default function RecordMood({ navigation }) {

    return (

        <View style={{ flex: 1, }}>
            <Header />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{Constants.APP_STRINGS.AMAZING}</Text>
                <Text style={styles.titleSub}>{Constants.APP_STRINGS.HOW_ARE_YOU_FEELING}</Text>
                <View style={{ flex: 4 ,justifyContent:'center',alignItems:'center' ,alignContent:'center'}}>
                    <Image style={{  marginBottom: 20,height:100,width:100 }} source={good}></Image>
                    <Slider
                        thumbTintColor={Constants.APP_COLOR.ORANGE_BG}
                        maximumValue={100}
                        minimumValue={0}
                        minimumTrackTintColor={Constants.APP_COLOR.ORANGE_BG}
                        maximumTrackTintColor={Constants.APP_COLOR.ORANGE_BG}
                        step={1}
                        value={1}
                        onValueChange={() => { }}
                        style={{ width: 300, height: 40, alignSelf: 'center', marginTop: 20 }}
                    />
                </View>
                <View style={{flex:1}}></View>
            </View>
            <AppThemeButton title={Constants.APP_STRINGS.NEXT}
                onPressButton={() => {
                    navigation.navigate("Feedback")
                }}
                style={styles.buttonCStyle}
                textSyle={{ color: 'white' }} />
            <TouchableOpacity
                style={{ position: 'absolute', bottom: 60, alignSelf: 'center', justifyContent: 'center' }}
                onPress={() => {

                }}>
                <Text style={styles.textBottom}>{Constants.APP_STRINGS.SKIP}</Text>
            </TouchableOpacity>
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
        position: 'absolute',
        bottom: 120,
        width: Dimensions.get('window').width - 50,
    },
    textBottom: {

        alignSelf: 'center',
        fontFamily: Constants.APP_FONTS.REGULAR,
        fontSize: 16
    },
});