import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import Onboard3 from './image/onboard3.svg';
import Logo1 from './image/logo1.svg';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen3 = () => {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    const isSmallDevice = height < 700;
    const isTablet = width > 768;

    // Calculate appropriate sizes based on screen dimensions
    const logoSize = isSmallDevice ? width * 0.4 : isTablet ? width * 0.3 : width * 0.45;
    const imageWidth = isTablet ? width * 0.7 : width * 0.9;
    const imageHeight = isSmallDevice ? height * 0.3 : isTablet ? height * 0.35 : height * 0.35;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo1
                        width={logoSize}
                        height={logoSize}
                    />
                </View>

                <View style={styles.imageContainer}>
                    <Onboard3
                        width={imageWidth}
                        height={imageHeight}
                        style={styles.image}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={[
                        styles.footerText,
                        isSmallDevice && styles.smallDeviceText,
                        isTablet && styles.tabletText
                    ]}>
                        Watching Free{'\n'}Concerts with Friends
                    </Text>

                    <Text style={[
                        styles.footerDescription,
                        isSmallDevice && styles.smallDeviceDescription,
                        isTablet && styles.tabletDescription
                    ]}>
                        Find and Booking concert tickets near{'\n'} your invite your friends to watch together
                    </Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[
                                styles.getStartedButton,
                                isSmallDevice && styles.smallDeviceButton,
                                isTablet && styles.tabletButton
                            ]}
                            onPress={() => navigation.navigate('LoginScreen')}
                        >
                            <Text style={[
                                styles.buttonText,
                                isSmallDevice && styles.smallDeviceButtonText,
                                isTablet && styles.tabletButtonText
                            ]}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const { width, height } = Dimensions.get('window');
const isSmallDevice = height < 700;
const isTablet = width > 768;
const bottomPadding = Platform.OS === 'ios' ? 34 : 24;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: isSmallDevice ? 10 : isTablet ? 30 : 20,
        paddingBottom: isSmallDevice ? 0 : 10,
        height: isSmallDevice ? height * 0.15 : isTablet ? height * 0.18 : height * 0.16,
        justifyContent: 'center',
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        resizeMode: 'contain',
    },
    footer: {
        backgroundColor: '#FF6F20',
        padding: isSmallDevice ? 20 : isTablet ? 40 : 30,
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingBottom: isSmallDevice ? 25 : isTablet ? 50 : 40 + bottomPadding,
        height: isSmallDevice ? height * 0.35 : isTablet ? height * 0.32 : height * 0.33,
    },
    footerText: {
        marginTop: isSmallDevice ? 5 : 15,
        fontSize: isSmallDevice ? 18 : isTablet ? 28 : 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    smallDeviceText: {
        fontSize: 18,
        marginTop: 5,
    },
    tabletText: {
        fontSize: 28,
        marginTop: 20,
    },
    footerDescription: {
        marginTop: isSmallDevice ? 10 : 20,
        marginBottom: isSmallDevice ? 8 : 15,
        textAlign: 'center',
        color: '#fff',
        fontSize: isSmallDevice ? 12 : isTablet ? 16 : 14,
    },
    smallDeviceDescription: {
        fontSize: 11,
        marginTop: 8,
        marginBottom: 8,
    },
    tabletDescription: {
        fontSize: 16,
        marginTop: 25,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: isSmallDevice ? 10 : isTablet ? 30 : 20,
        width: '100%',
        alignItems: 'center',
    },
    getStartedButton: {
        backgroundColor: '#31272a',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    smallDeviceButton: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    tabletButton: {
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 35,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    smallDeviceButtonText: {
        fontSize: 14,
    },
    tabletButtonText: {
        fontSize: 20,
    },
});

export default OnboardingScreen3;
