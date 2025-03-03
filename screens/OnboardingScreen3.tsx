import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Onboard3 from './image/onboard3.svg'; // Import SVG như một component
import Logo1 from './image/logo1.svg'; // Import logo
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Lấy kích thước màn hình

const OnboardingScreen3 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo1 width={width * 0.6} height={width * 0.6} />
            </View>
            <View style={styles.imageContainer}>
                <Onboard3 width={width * 0.9} height={height * 0.4} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Watching Free{'\n'}Concerts with Friends
                </Text>

                <Text style={styles.footerDescription}>
                    Find and Booking concert tickets near{'\n'} your invite your friends to watch together
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.getStartedButton}
                        onPress={() => navigation.navigate('LoginScreen')}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
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
        backgroundColor: '#FF6F20', // Màu cam
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
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff',
        marginVertical: 10,
        fontSize: 14, // Giảm kích thước chữ cho phù hợp
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    getStartedButton: {
        backgroundColor: '#31272a', // Đổi màu nền của nút
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30, // Bo tròn nút
    },
    buttonText: {
        color: '#fff', // Đổi màu chữ thành trắng
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OnboardingScreen3;