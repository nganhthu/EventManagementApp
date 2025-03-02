import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Onboard1 from './image/onboard1.svg'; // Import SVG như một component
import Logo1 from './image/logo1.svg'; // Import logo
import { useNavigation } from '@react-navigation/native';

const EventScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo1 width={200} height={200} /> {/* Thêm logo với kích thước phù hợp */}
            </View>
            <View style={styles.imageContainer}>
                <Onboard1 width={370} height={300} /> {/* Điều chỉnh kích thước SVG */}
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Explore Upcoming and {'\n'}Nearby Event</Text>

                <Text style={styles.footerDescription}>
                    In publishing and graphic design,{'\n'} Group 11 is a placeholder text commonly
                </Text>
                <View style={styles.pagination}>
                    <View style={[styles.dot, { backgroundColor: '#fff' }]} />
                    <View style={[styles.dot, { backgroundColor: 'rgba(255, 255, 255, 0.5)' }]} /> {/* Màu trắng nhạt */}
                    <View style={[styles.dot, { backgroundColor: 'rgba(255, 255, 255, 0.5)' }]} /> {/* Màu trắng nhạt */}
                </View>
                <View style={styles.buttonContainer}>
                     <TouchableOpacity onPress={() => navigation.navigate('OnboardingScreen3')}> {/* Thêm logic điều hướng */}
                          <Text style={styles.buttonText}>Skip</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('OnboardingScreen2')}> {/* Thêm logic điều hướng */}
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
        marginTop: -150,
        marginBottom: -50, // Giảm khoảng cách giữa logo và ảnh
    },
    imageContainer: {
        marginBottom: 50, // Khoảng cách giữa ảnh và chữ
    },
    textContainer: {
        alignItems: 'center', // Căn giữa chữ
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    description: {
        textAlign: 'center',
        marginHorizontal: 20,
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
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
        marginVertical: 10,
        fontSize: 15, // Tăng kích thước chữ
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    dot: {
        width: 12, // Tăng kích thước nút tròn
        height: 12, // Tăng kích thước nút tròn
        borderRadius: 6, // Bo tròn để tạo hình tròn
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

export default EventScreen;