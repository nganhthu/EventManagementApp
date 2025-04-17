import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo1 from './image/logo1.svg';
import FullNameIcon from './image/account.svg';
import EmailIcon from './image/email-edit-outline.svg';
import LockIcon from './image/eye-off-outline.svg';
import OpenIcon from './image/eye-outline.svg';
import NetInfo from '@react-native-community/netinfo';

const { width, height } = Dimensions.get('window');

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const validateForm = () => {
        if (!fullName.trim()) {
            Alert.alert('Lỗi', 'Vui lòng nhập họ và tên');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Lỗi', 'Email không đúng định dạng');
            return false;
        }

        if (password.length < 6) {
            Alert.alert('Lỗi', 'Mật khẩu phải có ít nhất 6 ký tự');
            return false;
        }

        if (password !== confirmPassword) {
            Alert.alert('Lỗi', 'Mật khẩu không khớp');
            return false;
        }

        return true;
    };
    const checkNetworkConnection = async () => {
      const state = await NetInfo.fetch();
      if (!state.isConnected) {
        Alert.alert('Lỗi', 'Vui lòng kiểm tra kết nối mạng');
        return false;
      }
      return true;
    };
    const handleRegister = async () => {
        if (!(await checkNetworkConnection())) return;
        if (!validateForm()) return;

        setIsLoading(true);

        const requestBody = {
            email,
            password,
            retypePassword: confirmPassword,
            fullName,
        };

        try {
            const response = await fetch('http://10.244.106.30:8081/iss_365_setting/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Thành công', 'Đăng ký thành công', [
                    { text: 'OK', onPress: () => navigation.navigate('LoginScreen') }
                ]);
            } else {
                Alert.alert('Lỗi', data.message || 'Đăng ký thất bại');
            }
        } catch (error) {
            console.error('Registration error:', error);
            Alert.alert('Lỗi', 'Không thể kết nối đến máy chủ');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.logoContainer}>
                    <Logo1 width={width * 0.5} height={width * 0.5} />
                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>Tạo tài khoản mới</Text>
                    <Text style={styles.subtitle}>Điền thông tin để bắt đầu trải nghiệm</Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <FullNameIcon width={20} height={20} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Họ và tên"
                            placeholderTextColor="#999"
                            value={fullName}
                            onChangeText={setFullName}
                            autoCapitalize="words"
                            returnKeyType="next"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <EmailIcon width={20} height={20} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            returnKeyType="next"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <LockIcon width={20} height={20} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Mật khẩu"
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!passwordVisible}
                            returnKeyType="next"
                        />
                        <TouchableOpacity
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            style={styles.eyeIcon}
                        >
                            {passwordVisible ? (
                                <OpenIcon width={20} height={20} />
                            ) : (
                                <LockIcon width={20} height={20} />
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <LockIcon width={20} height={20} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập lại mật khẩu"
                            placeholderTextColor="#999"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={!confirmPasswordVisible}
                            returnKeyType="done"
                            onSubmitEditing={handleRegister}
                        />
                        <TouchableOpacity
                            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            style={styles.eyeIcon}
                        >
                            {confirmPasswordVisible ? (
                                <OpenIcon width={20} height={20} />
                            ) : (
                                <LockIcon width={20} height={20} />
                            )}
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={[styles.registerButton, isLoading && styles.disabledButton]}
                        onPress={handleRegister}
                        disabled={isLoading}
                        activeOpacity={0.8}
                    >
                        {isLoading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Đăng ký</Text>
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.loginText}>
                        Đã có tài khoản?{' '}
                        <Text
                            style={styles.loginLink}
                            onPress={() => navigation.navigate('LoginScreen')}
                        >
                            Đăng nhập ngay
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 25,
        paddingBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: height * 0.05,
        marginBottom: 10,
    },
    header: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    formContainer: {
        width: '100%',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    inputIcon: {
        marginRight: 10,
        color: '#999',
    },
    input: {
        flex: 1,
        height: 50,
        color: '#333',
        fontSize: 15,
    },
    eyeIcon: {
        padding: 5,
    },
    registerButton: {
        backgroundColor: '#FF6F20',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#FF6F20',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
    },
    disabledButton: {
        opacity: 0.7,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
    },
    loginText: {
        color: '#666',
        fontSize: 14,
    },
    loginLink: {
        color: '#FF6F20',
        fontWeight: '600',
    },
});

export default RegisterScreen;