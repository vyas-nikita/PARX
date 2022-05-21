
import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  KeyboardAvoidingView, ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { PagerBg } from '@images';

import Constants from '../assets/constants';
import AppIntroSlider from 'react-native-app-intro-slider';
import { HandleKeyBoard } from '@component';


export default function Splash({ navigation }) {
  let slider = useRef()
  const INTRO_DATA = [
    {
      key: 1,
      title: Constants.APP_STRINGS.PAGER_1_HEADING,
      text: Constants.APP_STRINGS.PAGER_1_TITLE,
      image: require('../images/pager_map_icon.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 2,
      title: Constants.APP_STRINGS.PAGER_2_HEADING,
      text: Constants.APP_STRINGS.PAGER_2_TITLE,
      image: require('../images/pager_2.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 3,
      title: Constants.APP_STRINGS.PAGER_3_HEADING,
      text: Constants.APP_STRINGS.PAGER_3_TITLE,
      image: require('../images/pager_3.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 4,
      title: Constants.APP_STRINGS.PAGER_4_HEADING,
      text: Constants.APP_STRINGS.PAGER_4_TITLE,
      image: require('../images/pager_4.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 5,
      title: Constants.APP_STRINGS.PAGER_5_HEADING,
      text: Constants.APP_STRINGS.PAGER_5_TITLE,
      image: require('../images/pager_5.png'),
      backgroundColor: '#22bcb5',
    }
  ];

  const _renderPagination = (activeIndex: number) => (

    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignContent: 'center', }}>
        <View style={{
          alignSelf: 'flex-start', bottom: 30,
        }}>
          <Text style={styles.textLeft}>Skip</Text>
        </View>
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
        <TouchableOpacity onPress={() => { navigation.navigate("SplashEnd") }} >
          <View style={{
            alignSelf: 'flex-end', bottom: 30,
          }}>
            <Text style={styles.textRight}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  const _renderItem = ({ item }) => {
    return (

      <View style={styles.container}>
        <Image
          style={styles.imageView}
          resizeMode="contain"
          source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>

    );
  }
  return (

    <ImageBackground style={styles.container}
      resizeMode="stretch"
      source={PagerBg}>
      <View style={{ flex: 1 }}>
        <AppIntroSlider
          style={{ flex: 1 }}

          data={INTRO_DATA}
          ref={(ref) => (slider = ref)}

          renderItem={_renderItem}
          renderPagination={_renderPagination}

        /></View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
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
   
  },
  progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 30,
    textAlign: 'center',
    paddingRight: 30
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
    marginTop: 10,
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