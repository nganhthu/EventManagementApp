import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo1 from './image/logo1.svg'; // Import logo
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox từ thư viện mới
import EmailIcon from './image/email-edit-outline.svg'; // Import email icon
import LockIcon from './image/lock.svg'; // Import lock icon

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo1 width={width * 0.6} height={width * 0.6} />
            </View>
            <Text style={styles.title}>Đăng nhập</Text>
            <Text style={styles.subtitle}>Đăng nhập để có trải nghiệm thú vị</Text>

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
                    secureTextEntry
                />
                <LockIcon width={20} height={20} style={styles.icon} />
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={rememberMe}
                    onValueChange={setRememberMe}
                />
                <Text style={styles.checkboxLabel}>Nhớ tài khoản</Text>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
                Người dùng mới? <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles.registerLink}>Đăng ký</Text></TouchableOpacity>
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
        marginRight: 10,
    },
    input: {
        flex: 1,
        padding: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 10,
    },
    forgotPassword: {
        marginLeft: 'auto',
        color: '#FF6F20',
    },
    loginButton: {
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
    registerText: {
        marginTop: 20,
        textAlign: 'center',
    },
    registerLink: {
        color: '#FF6F20',
        fontWeight: 'bold',
    },
});

export default LoginScreen;