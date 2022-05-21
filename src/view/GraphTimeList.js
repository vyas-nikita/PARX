import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Constants from '../assets/constants';
import { PagerBg, dotLine, icForwardArrow, good, time, Line, icLocation } from '@images';
import Header from '../component/Header'
import { color } from 'react-native-reanimated';

export default function ParkDetail({ navigation }) {
    const list = [
        {
            id: 1,
            datee: "20 Minutes",
            hours: "2 min",
            address: 'Queen Elizabeth Park'
        },
        {
            id: 2,
            datee: "20 Minutes",
            hours: "2 min",
            address: 'Queen Elizabeth Park'
        },
        {
            id: 3,
            datee: "20 Minutes",
            hours: "2 min",
            address: 'Queen Elizabeth Park'
        }
    ]
    const renderListItem = ({ item }) => {
        return (
            <View
                style={{ elevation: 5, alignItems: 'center', paddingRight: 15, paddingLeft: 15, borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', margin: 10 }}>
                <View style={{ flexDirection: 'column', marginRight: 5,paddingTop:15,paddingBottom:15 }}>
                    <Text style={[styles.timeText, { textAlignVertical: 'center' }]}>2:00 PM</Text>
                    <Image source={dotLine} style={{ height: 90, alignSelf: 'center' }}></Image>
                    <Text style={[styles.timeBText, { textAlignVertical: 'center' }]}>2:00 PM</Text>
                </View>
                <Image source={Line} style={{ height: 150, marginLeft: 5, marginRight: 5 }}></Image>
                <View style={{ marginLeft: 10, flex: 1, flexDirection: 'column' }}>
                    <View style={styles.listInnerView}>
                        <Image style={styles.userImage}
                            resizeMode='contain'
                            source={good} >
                        </Image>
                        <Text style={[styles.minText, { textAlignVertical: 'center' }]}>{item.datee}</Text>
                    </View>

                    <View style={styles.listInnerView}>
                        <Image source={icLocation} style={{ height: 25, width: 20 }}></Image>
                        <Text style={[styles.profileText, { textAlignVertical: 'center' }]}>{item.address}</Text>
                    </View>
                    <Text style={[styles.bottomText, { textAlignVertical: 'center' }]}>I felt refreshed after a great walk</Text>
                </View>
               
            </View>
        )
    }
    return (

        <View style={{ flex: 1, backgroundColor: Constants.APP_COLOR.BG_COLOR }}>
            <Header title='Wednesday' textSyle={{ color: Constants.APP_COLOR.ACTIVITY_TEXT_COLOR }} />
            <Text style={styles.textA}>December 07, 2019</Text>
            <FlatList
                renderItem={(item) => renderListItem(item)}
                data={list}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    listInnerView: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
    },
    textA: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center'
    },
    profileText: {
        fontFamily: Constants.APP_FONTS.O_LIGHT,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 16,
        marginLeft: 10, justifyContent: 'center'
    },
    bottomText: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 14,
        marginLeft: 10, justifyContent: 'center'
    },
    minText: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 20,
        marginLeft: 10, justifyContent: 'center'
    },

    timeText: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 12,
        marginLeft: 10,
        justifyContent: 'center',
        marginBottom: 10
    },
    timeBText: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 12,
        marginLeft: 10,
        justifyContent: 'center',
        marginTop: 10
    },

    userImage: {
        height: 60,
        width: 60
    }
});