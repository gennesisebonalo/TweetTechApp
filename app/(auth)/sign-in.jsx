import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router';

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Optional loading state

    const backgroundImageUrl = 'https://i.pinimg.com/736x/73/24/aa/7324aa0142aed97c5eb8b8f64c7d2937.jpg';

    const handleSignUpPress = () => {
        router.push('/sign-up');
    };

    const handleSignInPress = () => {
        // Example form validation
        if (!email || !password) {
            alert('Please fill in both fields.');
            return;
        }
        
        setIsLoading(true);
        // Simulate network request or authentication process
        setTimeout(() => {
            setIsLoading(false);
            router.push('/home');
        }, 2000); // Simulate a 2-second delay
    };

    return (
        <ImageBackground source={{ uri: backgroundImageUrl }} style={{ flex: 1 }} resizeMode="cover">
            <SafeAreaView style={{ backgroundColor: 'transparent', flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: '90%',
                            maxWidth: 400,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            padding: 24,
                            marginVertical: 24,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.3,
                            shadowRadius: 2,
                            elevation: 5,
                        }}
                    >
                        <Image source={images.logo} style={{ width: 300, height: 120, alignSelf: 'center' }} resizeMode="contain" />

                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Username/Email"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#E0E0E0',
                                borderRadius: 8,
                                width: '100%',
                                marginTop: 20,
                                padding: 12,
                            }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        
                        <View style={{ position: 'relative', marginTop: 12 }}>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Password"
                                placeholderTextColor="#B0BEC5"
                                secureTextEntry={!passwordVisible}
                                style={{
                                    backgroundColor: '#E0E0E0',
                                    borderRadius: 8,
                                    width: '100%',
                                    padding: 12,
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 12,
                                    top: 12,
                                    padding: 8,
                                }}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            >
                                <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="#B0BEC5" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={{
                                backgroundColor: '#00008B',
                                borderRadius: 12,
                                width: '100%',
                                height: 48,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 24,
                            }}
                            activeOpacity={0.7}
                            onPress={handleSignInPress}
                            disabled={isLoading} // Disable button while loading
                        >
                            <Text
                                style={{
                                    fontFamily: 'YourFont-Bold', // Replace with your font
                                    fontSize: 18,
                                    color: 'white',
                                }}
                            >
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </Text>
                        </TouchableOpacity>

                        <Text style={{ color: '#001F3F', marginTop: 16, textAlign: 'center' }}>
                            Don't have an account?{' '}
                            <TouchableOpacity onPress={handleSignUpPress}>
                                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignIn;
