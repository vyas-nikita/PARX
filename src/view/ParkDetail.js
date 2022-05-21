
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
    ScrollView,
    FlatList
} from 'react-native';
import { mapNavigation, dummy, icForwardWhite ,Back} from '@images';
import Header from '../component/Header';
import Constants from '../assets/constants';
import AppIntroSlider from 'react-native-app-intro-slider';

export default function ParkDetail({ navigation }) {
    let slider = useRef()
    const INTRO_DATA = [
        {
            key: 1,
            title: Constants.APP_STRINGS.PAGER_1_HEADING,
            text: Constants.APP_STRINGS.PAGER_1_TITLE,
            image: require('../images/dummy.png'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 2,
            title: Constants.APP_STRINGS.PAGER_2_HEADING,
            text: Constants.APP_STRINGS.PAGER_2_TITLE,
            image: require('../images/dummy.png'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 3,
            title: Constants.APP_STRINGS.PAGER_3_HEADING,
            text: Constants.APP_STRINGS.PAGER_3_TITLE,
            image: require('../images/dummy.png'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 4,
            title: Constants.APP_STRINGS.PAGER_4_HEADING,
            text: Constants.APP_STRINGS.PAGER_4_TITLE,
            image: require('../images/dummy.png'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 5,
            title: Constants.APP_STRINGS.PAGER_5_HEADING,
            text: Constants.APP_STRINGS.PAGER_5_TITLE,
            image: require('../images/dummy.png'),
            backgroundColor: '#22bcb5',
        }
    ];


    const _renderPagination = (activeIndex: number) => (

        <SafeAreaView>
            <View style={{ flexDirection: 'row', alignContent: 'center', }}>

                <View style={styles.paginationContainer}>
                    <View style={styles.paginationDots}>
                        {INTRO_DATA.length > 1 &&
                            INTRO_DATA.map((_, i) => (
                                <TouchableOpacity
                                    key={i}
                                    style={[
                                        styles.dot,
                                        i === activeIndex
                                            ? { backgroundColor: '#5A8A4D' }
                                            : { backgroundColor: '#E4E4E4' },
                                    ]}
                                    onPress={() => slider?.goToSlide(i, true)} />
                            ))}
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );

    const _renderItem = ({ item }) => {
        return (

            <View >
                <Image
                    style={styles.imageView}
                    resizeMode="cover"
                    source={item.image} />
            </View>

        );
    }
    return (
        <View style={{ flex: 1, }}>
         
            <ScrollView
                nestedScrollEnabled={true}
                contentContianerStyle={{ backgroundColor: 'transaprent', height: Dimensions.get("screen").height }}
                showsVerticalScrollIndicator={false}>
                <View style={styles.scrollViewContainer}>
                    <AppIntroSlider
                        style={{ height: 250 }}

                        data={INTRO_DATA}
                        ref={(ref) => (slider = ref)}

                        renderItem={_renderItem}
                        renderPagination={_renderPagination}

                    />

                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.textTop, { textAlignVertical: 'center' }]}>Queen Elizabeth Park</Text>
                        <Text style={[styles.textRight, { textAlignVertical: 'center' }]}>2.4KM</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>

                        <Text style={styles.profileText}>7:00 AM - 8:00 AM</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginRight: 5 }}>
                        <Text style={[styles.textAddress, { textAlignVertical: 'center' }]}>Queen Elizabeth Park</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 5, paddingRight: 10, paddingLeft: 10, flexDirection: 'row', borderColor: Constants.APP_COLOR.GREEN_COLOR, borderRadius: 10, borderWidth: 1 }}>
                            <Text style={[styles.textGMap, { textAlignVertical: 'center' }]}>Google Maps</Text>
                            <Image style={{ height: 25, width: 25 }} source={mapNavigation}></Image>
                        </View>
                    </View>
                    <View style={styles.bottomBorderstyle} />
                    <Text style={[styles.activiiesText, { textAlignVertical: 'center' }]}>Activities :</Text>
                    <View style={{ height: 150 }}></View>
                    <View style={styles.headingView}>
                        <View style={styles.lineView} />
                        <Text style={styles.options}>{Constants.APP_STRINGS.ALREADY_HERE}</Text>
                        <View style={styles.lineView} />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonCStyle}
                        onPress={() => [
                            // navigation.navigate("StpTimer")
                        ]}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.buttonText}>{Constants.APP_STRINGS.START_TRACKING_GREEN}</Text>
                            <Image style={{ marginRight: 20, alignSelf: 'center' }} source={icForwardWhite}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonSStyle}
                        onPress={() => [
                            // navigation.navigate("StpTimer")
                        ]}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.buttonText}>{Constants.APP_STRINGS.START_SUSTAN}</Text>
                            <Image style={{ marginRight: 20, alignSelf: 'center' }} source={icForwardWhite}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{
                   position: 'absolute',
                   top: 10,
                   left: 10,
                   backgroundColor:'white',
                   paddingTop:6,
                   paddingBottom:6,
                   paddingLeft:10,
                   paddingRight:10,
                   alignItems:'center',
                   justifyContent:'center',
                   borderRadius:5
            }} >
                <Image  source={Back}></Image>
            </View>
        </View>
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
    buttonText: {
        color: 'white',
        textAlign: 'center',
        flex: 1,
        fontFamily: Constants.APP_FONTS.C_BOLD,
        fontSize: 16
    },
    buttonCStyle: {
        color: 'white',
        backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',


        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50,
    },
    buttonSStyle: {
        color: 'white',
        backgroundColor: Constants.APP_COLOR.BLUE,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50,
    },
    bottomBorderstyle: {
        backgroundColor: Constants.APP_COLOR.GREEN_COLOR,
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        borderStyle: 'dashed',
    },
    options: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.DARK_GREY,
        fontSize: 12,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center'
    },
    headingView: {
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineView: {
        alignSelf: 'center',
        backgroundColor: Constants.APP_COLOR.GREEN_COLOR,
        height: 1,
        flex: 1,
        borderStyle: 'solid'
    },
    textVIew: {
        marginLeft: 10,
        marginRight: 10,
    },
    textTop: {
        paddingLeft: 10,
        fontFamily: Constants.APP_FONTS.C_BOLD,
        fontSize: 20,
        color: Constants.APP_COLOR.BALCK,
        flex: 1,

    },
    textRight: {
        padding: 10,
        fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
        fontSize: 16,
        color: Constants.APP_COLOR.BALCK,

    },
    textAddress: {
        paddingLeft: 10,
        fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
        fontSize: 12,
        color: Constants.APP_COLOR.BALCK,
        flex: 1,

    },
    textGMap: {
        paddingRight: 10,
        fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
        fontSize: 16,
        color: Constants.APP_COLOR.GREEN_COLOR,

    },
    textRight: {
        paddingRight: 10,
        fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
        fontSize: 16,
        color: Constants.APP_COLOR.BALCK,

    },
    headingText: {
        fontFamily: Constants.APP_FONTS.C_BOLD,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 16,
        flex: 1,
        marginLeft: 10
    },
    headingText1: {
        fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
        color: Constants.APP_COLOR.GREEN_COLOR,
        fontSize: 16,
        textAlign: 'center',
        paddingRight: 10,
        marginLeft: 10
    },
    profileText: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 12,
        marginLeft: 10
    },
    activiiesText: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 16,
        marginLeft: 10
    },
    buttonStyle: {
        color: 'black',
        borderColor: Constants.APP_COLOR.GREEN_COLOR,
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 10,

        width: Dimensions.get('window').width - 50,
    },
    textPassword: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        marginTop: 20,
        paddingLeft: 10
    },
    textBottom: {
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center',
        fontFamily: Constants.APP_FONTS.O_BOLD,
        fontSize: 16
    },

    buttonStyle: {
        color: 'black',
        borderColor: Constants.APP_COLOR.GREEN_COLOR,
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
        alignContent: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        left: 0
    },
    progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },

    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        marginTop: 10,
        paddingLeft: 30,
        textAlign: 'center',
        paddingRight: 30
    },
    textEmail: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        marginTop: 60,
        paddingLeft: 10
    },
    textPassword: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        marginTop: 20,
        paddingLeft: 10
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
        height: 250
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