import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

export default function TopBar({ backgroundColor, barStyle }) {

  return (
<View>
  <StatusBar backgroundColor="black" barStyle="dark-content" />
  <View style={styles.statusBar}>
        <Text style={styles.appName}>WorkRizz</Text>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: "black",
      justifyContent: 'center',
      paddingLeft: 16,
    },
    appName: {
      color: '#fff',
      fontSize: 16,
    },
  });