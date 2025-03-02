import React from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import Logo from './image/logo.svg';

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000); // Thời gian hiển thị Splash Screen

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashScreen}>
      <Logo width={370} height={370} />
      <ActivityIndicator size="large" color="#FFA500" />
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff5ef', // Đổi màu nền thành #fff5ef
  },
  logo: {
    width: 400, // Kích thước logo lớn hơn
    height: 400, // Kích thước logo lớn hơn
    marginBottom: 30, // Khoảng cách giữa logo và ActivityIndicator
  },
});

export default SplashScreen;