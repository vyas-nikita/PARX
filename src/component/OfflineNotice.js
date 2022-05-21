import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import { noIntenet } from '../images/';
import {useNetInfo} from '@react-native-community/netinfo';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={noIntenet}
        />
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  image: {
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 25,
  },
});

export default OfflineNotice;
