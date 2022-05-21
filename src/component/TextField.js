
import React from 'react';
import {
  View, TextInput, Text,StyleSheet,Dimensions
} from 'react-native';

import Constants from '../assets/constants';

export const TextFields = (
 props
) => {
  return (
    <View>
      <TextInput  style={styles.buttonStyle}/>
      {props.error && <Text>{props.error}</Text>}
    </View>
  );
};

const styles=StyleSheet.create({
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
})

