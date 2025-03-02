import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Onboard3 from './image/onboard3.svg'; // Import SVG như một component
import Logo1 from './image/logo1.svg'; // Import logo
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen3 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo1 width={200} height={200} /> {/* Thêm logo với kích thước phù hợp */}
            </View>
            <View style={styles.imageContainer}>
                <Onboard3 width={370} height={300} /> {/* Điều chỉnh kích thước SVG */}
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Watching Free{'\n'}Concerts with Friends</Text>

                <Text style={styles.footerDescription}>
                    Find and Booking concert tickets near{'\n'} your invite your friends to watch together
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.getStartedButton}
                        onPress={() => navigation.navigate('LoginScreen')} // Thay đổi tên màn hình đăng nhập
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
        marginTop: -150,
        marginBottom: -50, // Giảm khoảng cách giữa logo và ảnh
    },
    imageContainer: {
        marginBottom: 50, // Khoảng cách giữa ảnh và chữ
    },
    footer: {
        backgroundColor: '#FF6F20', // Màu cam
        padding: 20,
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 20, // Bo tròn góc trên bên trái
        borderTopRightRadius: 20, // Bo tròn góc trên bên phải
    },
    footerText: {
        marginTop: 20,
        fontSize: 30, // Tăng kích thước chữ
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
        fontSize: 15, // Tăng kích thước chữ
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    getStartedButton: {
        backgroundColor: '#31272a', // Đổi màu nền của nút thành đen
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