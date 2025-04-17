import React from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions, Platform } from 'react-native';
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
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'large' : 24}
        color="#FFA500"
        style={styles.loader}
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const isSmallDevice = width < 375;
const isTablet = width > 768;

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff5ef',
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: isTablet ? '50%' : isSmallDevice ? '80%' : '70%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: isTablet ? 50 : isSmallDevice ? 20 : 30,
    maxWidth: 500, // Prevent logo from being too large on big screens
    maxHeight: height * 0.5, // Ensure logo doesn't take more than half the screen height
  },
  loader: {
    marginTop: isSmallDevice ? 10 : 20,
    transform: [{ scale: isTablet ? 1.5 : isSmallDevice ? 0.8 : 1 }],
  }
});

export default SplashScreen;
