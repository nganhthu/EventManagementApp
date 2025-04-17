import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo1 from './image/logo1.svg'; // Import logo

const { width } = Dimensions.get('window');

const OTPRegisScreen = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '']);
    const [countdown, setCountdown] = useState(90);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [countdown]);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleResendOtp = () => {
        // Logic to resend OTP
        setCountdown(90);
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo1 width={width * 0.6} height={width * 0.6} />
            </View>
            <Text style={styles.title}>Nhập mã OTP</Text>
            <Text style={styles.subtitle}>Chúng tôi đã gửi bạn mã xác nhận</Text>

            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(index, value)}
                    />
                ))}
            </View>

            <Text style={styles.resendText}>
                Chưa nhận được OTP?{' '}
                {countdown > 0 ? (
                    <Text style={styles.resendLink}>Gửi lại ({countdown}s)</Text>
                ) : (
                    <TouchableOpacity onPress={handleResendOtp}>
                        <Text style={styles.resendLink}>Gửi lại</Text>
                    </TouchableOpacity>
                )}
            </Text>

            <TouchableOpacity  style={styles.submitButton} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.buttonText}>Gửi mã</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logoContainer: {
        marginTop: -100,
        marginBottom: -40,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 18,
    },
    resendText: {
        marginBottom: 20,
        textAlign: 'center',
    },
    resendLink: {
        color: '#FF6F20',
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: '#FF6F20',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OTPRegisScreen;