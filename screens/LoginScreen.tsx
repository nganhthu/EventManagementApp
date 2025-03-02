import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox từ thư viện mới

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>
            <Text style={styles.subtitle}>Đăng nhập để có trải nghiệm thú vị</Text>

            <TextInput
                style={styles.input}
                placeholder="Nhập địa chỉ Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

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
                Người dùng mới? <TouchableOpacity><Text style={styles.registerLink}>Đăng ký</Text></TouchableOpacity>
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
    input: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
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