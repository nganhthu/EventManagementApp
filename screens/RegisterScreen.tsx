import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo1 from './image/logo1.svg'; // Import logo
import FullNameIcon from './image/account.svg'; // Import full name icon
import EmailIcon from './image/email-edit-outline.svg'; // Import email icon
import LockIcon from './image/eye-off-outline.svg'; // Import lock icon
import OpenIcon from './image/eye-outline.svg'; // Import open eye icon

const { width } = Dimensions.get('window');

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);

    const handleRegister = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
             Alert.alert('Error', 'Email không đúng định dạng');
             return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        Alert.alert('Success', 'Registration successful');
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo1 width={width * 0.6} height={width * 0.6} />
            </View>
            <Text style={styles.title}>Đăng ký</Text>
            <Text style={styles.subtitle}>Tạo tài khoản và tận hưởng tất cả các dịch vụ</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Tên đầy đủ"
                    value={fullName}
                    onChangeText={setFullName}
                />
                <FullNameIcon width={20} height={20} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập địa chỉ Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <EmailIcon width={20} height={20} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? (
                        <OpenIcon width={20} height={20} style={styles.icon} />
                    ) : (
                        <LockIcon width={20} height={20} style={styles.icon} />
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!confirmPasswordVisible}
                />
                <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                    {confirmPasswordVisible ? (
                        <OpenIcon width={20} height={20} style={styles.icon} />
                    ) : (
                        <LockIcon width={20} height={20} style={styles.icon} />
                    )}
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>
                Đã có tài khoản? <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text style={styles.loginLink}>Đăng nhập</Text></TouchableOpacity>
            </Text>
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        flex: 1,
        padding: 15,
    },
    registerButton: {
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
    loginText: {
        marginTop: 20,
        textAlign: 'center',
    },
    loginLink: {
        color: '#FF6F20',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;