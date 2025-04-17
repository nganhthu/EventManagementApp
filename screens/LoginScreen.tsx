import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert, ActivityIndicator, SafeAreaView, Platform, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo1 from './image/logo1.svg';
import CheckBox from '@react-native-community/checkbox';
import EmailIcon from './image/email-edit-outline.svg';
import LockIcon from './image/lock.svg';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios configuration remains unchanged
const api = axios.create({
  baseURL: 'http://52.65.190.125/iss_365_setting/',
  timeout: 10000,
});

axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error) =>
    axiosRetry.isNetworkOrIdempotentRequestError(error) ||
    error.code === 'ECONNABORTED',
});

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const { width, height } = Dimensions.get('window');
  const isSmallDevice = height < 700;
  const isTablet = width > 768;

  // Handle login function remains unchanged
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ email và mật khẩu');
      return;
    }

    const netState = await NetInfo.fetch();
    if (!netState.isConnected) {
      Alert.alert('Lỗi', 'Không có kết nối mạng. Vui lòng kiểm tra lại kết nối Internet của bạn.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.post(
        '/auth/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data && response.data.message === 'Login successfully') {
        if (response.data.token) {
          await AsyncStorage.setItem('userToken', response.data.token);

          if (rememberMe) {
            await AsyncStorage.setItem('rememberedEmail', email);
          } else {
            await AsyncStorage.removeItem('rememberedEmail');
          }
        }

        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Lỗi', response.data.message || 'Đăng nhập thất bại');
      }
    } catch (error) {
      console.error('Login error:', error);

      let errorMessage = 'Có lỗi xảy ra khi đăng nhập';

      if (error.response) {
        if (error.response.status === 500) {
          errorMessage = 'Máy chủ gặp sự cố. Vui lòng thử lại sau.';
        } else if (error.response.status === 401) {
          errorMessage = 'Email hoặc mật khẩu không đúng.';
        } else {
          errorMessage = error.response.data?.message || 'Đã xảy ra lỗi không xác định.';
        }
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Kết nối quá hạn. Vui lòng thử lại.';
      } else if (error.message.includes('Network Error')) {
        errorMessage = 'Không thể kết nối đến máy chủ.';
      }

      Alert.alert('Lỗi', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle remember me function
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // useEffect remains unchanged
  React.useEffect(() => {
    const loadRememberedEmail = async () => {
      try {
        const rememberedEmail = await AsyncStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
          setEmail(rememberedEmail);
          setRememberMe(true);
        }
      } catch (error) {
        console.error('Failed to load remembered email', error);
      }
    };

    loadRememberedEmail();
  }, []);

  // Calculate logo size based on device dimensions
  const logoSize = isSmallDevice ? width * 0.4 : isTablet ? width * 0.3 : width * 0.45;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Logo1
                width={logoSize}
                height={logoSize}
              />
            </View>

            <View style={styles.formContainer}>
              <Text style={[
                styles.title,
                isSmallDevice && styles.smallDeviceTitle,
                isTablet && styles.tabletTitle
              ]}>
                Đăng nhập
              </Text>

              <Text style={[
                styles.subtitle,
                isSmallDevice && styles.smallDeviceSubtitle,
                isTablet && styles.tabletSubtitle
              ]}>
                Đăng nhập để có trải nghiệm thú vị
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    isSmallDevice && styles.smallDeviceInput,
                    isTablet && styles.tabletInput
                  ]}
                  placeholder="Nhập địa chỉ Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <EmailIcon
                  width={isSmallDevice ? 16 : isTablet ? 24 : 20}
                  height={isSmallDevice ? 16 : isTablet ? 24 : 20}
                  style={styles.icon}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    isSmallDevice && styles.smallDeviceInput,
                    isTablet && styles.tabletInput
                  ]}
                  placeholder="Mật khẩu"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.iconButton}
                >
                  <LockIcon
                    width={isSmallDevice ? 16 : isTablet ? 24 : 20}
                    height={isSmallDevice ? 16 : isTablet ? 24 : 20}
                    style={[styles.icon, showPassword && styles.activeIcon]}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={styles.checkboxWrapper}
                  onPress={toggleRememberMe}
                  activeOpacity={0.7}
                >
                  <CheckBox
                    value={rememberMe}
                    onValueChange={toggleRememberMe}
                    tintColors={{ true: '#FF6F20', false: '#ccc' }}
                    style={isTablet && { transform: [{ scale: 1.2 }] }}
                  />
                  <Text style={[
                    styles.checkboxLabel,
                    isSmallDevice && styles.smallDeviceText,
                    isTablet && styles.tabletText
                  ]}>
                    Nhớ tài khoản
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={[
                    styles.forgotPassword,
                    isSmallDevice && styles.smallDeviceText,
                    isTablet && styles.tabletText
                  ]}>
                    Quên mật khẩu?
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={[
                  styles.loginButton,
                  isSmallDevice && styles.smallDeviceButton,
                  isTablet && styles.tabletButton
                ]}
                onPress={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator size={isSmallDevice ? "small" : "large"} color="#fff" />
                ) : (
                  <Text style={[
                    styles.buttonText,
                    isSmallDevice && styles.smallDeviceButtonText,
                    isTablet && styles.tabletButtonText
                  ]}>
                    Đăng nhập
                  </Text>
                )}
              </TouchableOpacity>

              <View style={styles.registerContainer}>
                <Text style={[
                  styles.registerText,
                  isSmallDevice && styles.smallDeviceText,
                  isTablet && styles.tabletText
                ]}>
                  Người dùng mới?{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={[
                    styles.registerLink,
                    isSmallDevice && styles.smallDeviceText,
                    isTablet && styles.tabletText
                  ]}>
                    Đăng ký
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');
const isSmallDevice = height < 700;
const isTablet = width > 768;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: isSmallDevice ? 15 : isTablet ? 40 : 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isSmallDevice ? -50 : isTablet ? -30 : -60,
    marginBottom: isSmallDevice ? -20 : isTablet ? 0 : -20,
  },
  formContainer: {
    width: '100%',
    maxWidth: isTablet ? 500 : '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  smallDeviceTitle: {
    fontSize: 24,
    marginBottom: 5,
  },
  tabletTitle: {
    fontSize: 36,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  smallDeviceSubtitle: {
    fontSize: 14,
    marginBottom: 15,
  },
  tabletSubtitle: {
    fontSize: 20,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: isSmallDevice ? 10 : isTablet ? 20 : 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  activeIcon: {
    tintColor: '#FF6F20',
  },
  iconButton: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  smallDeviceInput: {
    padding: 12,
    fontSize: 14,
  },
  tabletInput: {
    padding: 18,
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: isSmallDevice ? 15 : isTablet ? 30 : 20,
    width: '100%',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5, // Add padding to increase touch area
  },
  checkboxLabel: {
    marginLeft: 10,
    color: '#333',
  },
  forgotPassword: {
    color: '#FF6F20',
    fontWeight: '500',
    padding: 5, // Add padding to increase touch area
  },
  loginButton: {
    backgroundColor: '#FF6F20',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  smallDeviceButton: {
    paddingVertical: 12,
    height: 45,
  },
  tabletButton: {
    paddingVertical: 18,
    height: 60,
    borderRadius: 8,
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
  registerContainer: {
    flexDirection: 'row',
    marginTop: isSmallDevice ? 15 : isTablet ? 30 : 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    textAlign: 'center',
    color: '#333',
  },
  registerLink: {
    color: '#FF6F20',
    fontWeight: 'bold',
  },
  smallDeviceText: {
    fontSize: 14,
  },
  tabletText: {
    fontSize: 18,
  },
});

export default LoginScreen;
