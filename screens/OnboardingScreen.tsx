import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Onboard1 from './image/onboard1.svg'; // Import SVG như một component

const EventScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Onboard1 width={370} height={300} /> {/* Điều chỉnh kích thước SVG */}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>Explore Upcoming and Nearby Events</Text>
                <Text style={styles.description}>
                    In publishing and graphic design, Group 11 is a placeholder text commonly
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imageContainer: {
        marginBottom: 20, // Khoảng cách giữa ảnh và chữ
    },
    textContainer: {
        alignItems: 'center', // Căn giữa chữ
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    description: {
        textAlign: 'center',
        marginHorizontal: 20,
    },
});

export default EventScreen;