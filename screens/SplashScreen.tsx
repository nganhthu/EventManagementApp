import React from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000); // Thời gian hiển thị Splash Screen

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashScreen}>
      <Image source={require('./image/logo.jpg')} style={styles.logo} />
      <ActivityIndicator size="large" color="#FFA500" />
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Màu nền trắng
  },
  logo: {
    width: 200, // Kích thước logo
    height: 200, // Kích thước logo
    marginBottom: 20,
  },
});

export default SplashScreen;