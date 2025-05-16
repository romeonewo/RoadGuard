import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Text style={styles.title}>Road Guard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1128',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
