
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  ScrollView,
  Dimensions, ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { PagerBg, icBackWARDArrow, icForwardArrow, good, time, leaf, icLocation } from '@images';

import Constants from '../assets/constants';
import { VictoryChart, VictoryBar, VictoryTheme } from "victory-native";
let { width } = Dimensions.get('window');
import moment from 'moment';


export default function Graph({ navigation }) {
  const [datee, setDate] = useState(moment());
  const [startWeek, setStartWeek] = useState(moment().startOf('week'));
  const [endweek, setEndWeek] = useState(moment().endOf('week'));
  const [isDaily, setIsDaily] = useState(true);
  const list = [
    {
      id: 1,
      datee: "20-12-20210",
      hours: "2 min",
      address: 'Queen Elizabeth Park'
    },
    {
      id: 2,
      datee: "20-12-20210",
      hours: "2 min",
      address: 'Queen Elizabeth Park'
    },
    {
      id: 3,
      datee: "20-12-20210",
      hours: "2 min",
      address: 'Queen Elizabeth Park'
    }
  ]

  const subtratDate = () => {
    let startdate = moment(datee);
    startdate = startdate.subtract(1, "days");
    setDate(startdate);
  }

  const addDate = () => {
    let startdate = moment(datee);
    startdate = startdate.add(1, "days");
    setDate(startdate);
  }
  const getLastWeek = () => {
    let currentDate = moment(startWeek);
    currentDate = currentDate.subtract(1, "weeks")
    let weekStart = currentDate.clone().startOf('week');
    let weekEnd = currentDate.clone().endOf('week');
    setStartWeek(weekStart)
    setEndWeek(weekEnd)
  }
  const getfutureWeek = () => {
    let currentDate = moment(startWeek);
    currentDate = currentDate.add(1, "weeks")
    let weekStart = currentDate.clone().startOf('week');
    let weekEnd = currentDate.clone().endOf('week');
    setStartWeek(weekStart)
    setEndWeek(weekEnd)
  }

  const Cal = () => {
    return (
      <View style={styles.calContainerView}>
        <TouchableOpacity onPress={() => {
          if (isDaily)
            subtratDate()
          else getLastWeek()
        }}>
          <Image source={icBackWARDArrow}></Image>
        </TouchableOpacity>
        <Text style={styles.calText}>
          {isDaily ? datee.format("MMMM DD") : ("" + startWeek.format("MMMM DD") + " - " + endweek.format("MMMM DD"))}
        </Text>
        <TouchableOpacity onPress={() => {
          if (isDaily)
            addDate();
          else getfutureWeek();
        }}>
          <Image source={icForwardArrow}></Image>
        </TouchableOpacity>
      </View>
    );
  }
  const data = [
    { time: '1PM', hours: 3 },
    { time: '2PM', hours: 6 },
    { time: '3AM', hours: 1 },
    { time: '4AM', hours: 5 },
    { time: '5AM', hours: 8 },
    { time: '9AM', hours: 2 },
    { time: '7AM', hours: 6 }
  ];
  const renderListItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate("GraphTimeList")
      }}>
        <View
          style={{ elevation: 5, alignItems: 'center', padding: 15, borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', margin: 10 }}>

          <View style={styles.imageView}>
            <Image style={styles.userImage}
              resizeMode='contain'
              source={good} >
            </Image>
          </View>
          <View style={{ marginLeft: 10, flex: 1, flexDirection: 'column' }}>
            <View style={styles.listInnerView}>
              <Image source={time} style={{ height: 20, width: 20 }}></Image>
              <Text style={[styles.profileText, { textAlignVertical: 'center' }]}>{item.datee}</Text>
            </View>
            <View style={styles.listInnerView}>
              <Image source={leaf} style={{ height: 25, width: 20 }}></Image>
              <Text style={[styles.profileText, { textAlignVertical: 'center' }]}>{item.hours}</Text>
            </View>
            <View style={styles.listInnerView}>
              <Image source={icLocation} style={{ height: 25, width: 20 }}></Image>
              <Text style={[styles.profileText, { textAlignVertical: 'center' }]}>{item.address}</Text>
            </View>
          </View>
          <Image style={styles.userImage}
            resizeMode='contain'
            source={icForwardArrow} >
          </Image>
        </View>
      </TouchableOpacity>
    )
  }
  return (

    <View style={{ flex: 1, backgroundColor: Constants.APP_COLOR.BG_COLOR }}>

      <Text style={styles.title}>{Constants.APP_STRINGS.ACTIVITY}</Text>

      <View style={styles.headingView}>
        <TouchableOpacity onPress={() => {
          setIsDaily(true);
        }}>
          <View style={[
            styles.inActiveView,
            isDaily
              ? styles.activeView
              : styles.inActiveView,
          ]} >
            <Text style={[
              styles.optionsText,
              isDaily
                ? styles.optionsTextA
                : styles.optionsText,
            ]}>{Constants.APP_STRINGS.DAILY}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setIsDaily(false);
        }}>
          <View style={[
            styles.inActiveView,
            !isDaily
              ? styles.activeView
              : styles.inActiveView,
          ]} >
            <Text style={[
              styles.optionsTextA,
              !isDaily
                ? styles.optionsTextA
                : styles.optionsText,
            ]}>{Constants.APP_STRINGS.WEEKLY}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
        contentContianerStyle={{ backgroundColor: 'transaprent' }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewContainer}>
          <Cal />
          <View style={{ marginTop: -30, }}>
            <VictoryChart domainPadding={20}
              theme={VictoryTheme.material}
              height={250}
              style={{ top: 20 }}
            >
              <VictoryBar
                style={{ data: { fill: Constants.APP_COLOR.GRAPH_BAR_COLOR } }}
                data={data}
                // data accessor for x values
                x="time"
                // data accessor for y values
                y="hours" />
            </VictoryChart>
          </View>
          <View
            style={{ alignItems: 'center', padding: 15, flexDirection: 'row', margin: 10 }}>
            <View style={{ flex: 1, }}>
              <Text style={styles.headingText}>You have spent</Text>
              <View style={styles.headingInnerView}>
                <Image source={leaf} style={styles.imgView}></Image>
                <Text style={styles.innerText}>3 h 10 min</Text>
              </View>
            </View>
            <View style={{ flex: 1, }}>
              <Text style={styles.headingText}>Average mood</Text>
              <View style={styles.headingInnerView}>
                <Image source={good} style={styles.imgView}></Image>
                <Text style={styles.innerText}>Good</Text>
              </View>
            </View>
          </View>
          <FlatList

            renderItem={(item) => renderListItem(item)}
            data={list}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
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
  listInnerView: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,


  },
  headingText: {
    textAlign: 'center',
    color: Constants.APP_COLOR.BALCK,
    fontSize: 16,
    fontFamily: Constants.APP_FONTS.O_LIGHT
  },
  headingInnerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  imgView: {
    width: 20, height: 20, marginLeft: -5
  },
  innerText: {
    marginLeft: 5, textAlign: 'center',
    color: Constants.APP_COLOR.BALCK,
    fontSize: 16,
    fontFamily: Constants.APP_FONTS.REGULAR
  },
  profileText: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: Constants.APP_COLOR.BALCK,
    fontSize: 12,
    marginLeft: 10, justifyContent: 'center'
  },
  calText: {
    color: 'black', flex: 1, textAlign: 'center', fontSize: 16, fontFamily: Constants.APP_FONTS.REGULAR
  },
  calContainerView: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },
  inActiveView: {
    marginRight: 10,
    width: 120,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: Constants.APP_COLOR.GREEN_COLOR
  },
  activeView: {
    marginLeft: 10,
    width: 120,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    padding: 10,
    borderRadius: 60
  },
  optionsText: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: Constants.APP_COLOR.DARK_GREY,
    fontSize: 16,
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
  optionsTextA: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: 'white',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  },
  textVIew: {
    marginLeft: 10,
    marginRight: 10,
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


  },
  title: {
    fontFamily: "Comfortaa-Bold",
    color: Constants.APP_COLOR.ACTIVITY_TEXT_COLOR,
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