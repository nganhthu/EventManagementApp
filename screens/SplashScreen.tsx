import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
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
      <View style={styles.logoContainer}>
        <Logo width="100%" height="100%" />
      </View>
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
  logoContainer: {
    width: '70%', // Chiều rộng của logo container
    aspectRatio: 1, // Giữ tỷ lệ 1:1 cho logo
    justifyContent: 'center', // Căn giữa logo theo chiều dọc
    alignItems: 'center', // Căn giữa logo theo chiều ngang
    marginBottom: 30, // Khoảng cách giữa logo và ActivityIndicator
  },
});

export default SplashScreen;