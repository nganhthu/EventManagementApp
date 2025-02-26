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
      <Image source={require('./image/logo.png')} style={styles.logo} />
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
    width: 400, // Kích thước logo lớn hơn
    height: 400, // Kích thước logo lớn hơn
    marginBottom: 20, // Khoảng cách giữa logo và ActivityIndicator
  },
});

export default SplashScreen;