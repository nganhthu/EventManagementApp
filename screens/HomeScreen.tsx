import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        // Logic để xử lý đăng xuất (nếu cần)
        navigation.navigate('Login'); // Quay lại màn hình đăng nhập
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chào mừng bạn đến với HomeScreen!</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Đăng xuất</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logoutButton: {
        backgroundColor: '#FF6F20',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;