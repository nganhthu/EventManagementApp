import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EVENT</Text>
      <Text style={styles.subtitle}>Explore Upcoming and Nearby Events</Text>
      <Button title="Next" onPress={() => {/* Chuyển đến màn hình tiếp theo */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  subtitle: {
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default OnboardingScreen;