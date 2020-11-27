import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Vibration, Alert } from 'react-native';

const time= 2000;

export default function App() {
  return (
    <View
      style={styles.container}>
      <ImageBackground
        source={require('./assets/toothpaste.jpg')}
        style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ color: '#525252', textAlign: 'center', fontSize: 25 }}>
          HELLO {'\n'} REACT NATIVE!
          </Text>
        <Text style={{color: '#6F6F6F', textAlign: 'center' }}>
          Welcome to my React Native App {'\n'} Press the button, if you dare
        </Text>
        <Button
          title='press me'
          color='pink'
          onPress={() => {
            Vibration.vibrate(time), Alert.alert('Bzzz');
          }}>
        </Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1
  },
});
