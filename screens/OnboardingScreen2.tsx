import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Onboard2 from './image/onboard2.svg'; // Import SVG như một component
import Logo1 from './image/logo1.svg'; // Import logo
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Lấy kích thước màn hình

const OnboardingScreen2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo1 width={width * 0.6} height={width * 0.6} />
            </View>
            <View style={styles.imageContainer}>
                <Onboard2 width={width * 0.9} height={height * 0.4} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Create and Find Events{'\n'} Easily in One Place
                </Text>

                <Text style={styles.footerDescription}>
                    In this app you can create any kind of {'\n'} events and you can join at events
                </Text>
                <View style={styles.pagination}>
                    <View style={[styles.dot, { backgroundColor: 'rgba(255, 255, 255, 0.5)' }]} />
                    <View style={[styles.dot, { backgroundColor: '#fff' }]} />
                    <View style={[styles.dot, { backgroundColor: 'rgba(255, 255, 255, 0.5)' }]} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OnboardingScreen3')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OnboardingScreen3')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
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
    logoContainer: {
        marginTop: -10,
        marginBottom: -40,
    },
    imageContainer: {
        marginBottom: -150,
    },
    footer: {
        backgroundColor: '#FF6F20',
        padding: 40,
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        marginTop: 200,
        paddingBottom: 70,
    },
    footerText: {
        marginTop: 20,
        fontSize: 24, // Giảm kích thước chữ cho phù hợp
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    footerDescription: {
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
        marginVertical: 10,
        fontSize: 14, // Giảm kích thước chữ cho phù hợp
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 20,
    },
});

export default OnboardingScreen2;