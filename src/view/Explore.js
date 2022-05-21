
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
import { PagerBg, dummy, good } from '@images';

import Constants from '../assets/constants';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../component/Header';
import { AppThemeButton } from '../component/Buttons';
import MapView from 'react-native-maps';

export default function Explore({ navigation }) {
  const list = [
    {
      id: 1,
      datee: "2659 West 35th Avenue, V6N2L9",
      hours: "2 min",
      address: 'Queen Elizabeth Park'
    },
    {
      id: 2,
      datee: "2659 West 35th Avenue, V6N2L9",
      hours: "2 min",
      address: 'Queen Elizabeth Park'
    },
    {
      id: 3,
      datee: "2659 West 35th Avenue, V6N2L9",
      hours: "2 min",
      address: 'Queen Elizabeth Park'
    }
  ]
  const renderListItem = ({ item }) => {
    return (
      <TouchableOpacity  onPress={()=>{
        navigation.navigate("ParkDetail")
      }}>
        <View
          style={{
            elevation: 5,
            borderRadius: 10, backgroundColor: 'white',

            margin: 10, width: 300
          }}>


          <Image style={{ height: 150, width: 300, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            resizeMode='stretch'
            source={dummy} >
          </Image>


          <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5, flex: 1 }}>

            <Text style={styles.headingText}>{item.address}</Text>
            <Text style={styles.headingText1}>26 KM</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>

            <Text style={styles.profileText}>{item.hours}</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>

            <Text style={styles.addressText}>{item.datee}</Text>
          </View>

        </View>
      </TouchableOpacity>
    )
  }
  return (

    <ImageBackground style={styles.container}
      resizeMode="stretch"
      source={PagerBg}>
      <View style={{ flex: 1, }}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContianerStyle={{ backgroundColor: 'transaprent', }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.scrollViewContainer}>
            <MapView
              style={{ height: 300, width: Dimensions.get("window").width }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <Text style={styles.textTop}>{Constants.APP_STRINGS.NEAR_BY}</Text>
            <FlatList
              horizontal={true}
              renderItem={(item) => renderListItem(item)}
              data={list}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </View>
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
  textVIew: {
    marginLeft: 10,
    marginRight: 10,
  },
  textTop: {
    padding: 10,
    fontFamily: Constants.APP_FONTS.C_REGULAR,
    fontSize: 20,
    color: Constants.APP_COLOR.BALCK,
    marginTop: 10
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
  addressText: {
    fontFamily: Constants.APP_FONTS.O_SEMI_BOLD,
    color: Constants.APP_COLOR.BALCK,
    fontSize: 12,
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
  buttonCStyle: {
    color: 'white',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    alignSelf: 'center',
    marginLeft: 20,
    position: 'absolute',
    bottom: 100,
    width: Dimensions.get('window').width - 50,
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
    width: 300
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