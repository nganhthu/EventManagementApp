import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EVENT</Text>
      <Image source={require('./image/onboarding_image.png')} style={styles.image} />

      <Text style={styles.description}>
        Explore Upcoming and Nearby Events
      </Text>
      <Text style={styles.placeholder}>
        In publishing and graphic design, Lorem is a placeholder text commonly
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('NextScreen')} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '50%', // Điều chỉnh kích thước hình ảnh
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  placeholder: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  skipButton: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
  },
  skipText: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;