import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants/images.js'; 
import CustomButton from '../assets/components/CustomButton.jsx'; 

export default function App() {
  const logo1Size = { width: 1000, height: 400 }; 
  const backgroundImageUrl = 'https://i.pinimg.com/736x/73/24/aa/7324aa0142aed97c5eb8b8f64c7d2937.jpg'; 

  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }} 
      style={{ flex: 1 }}
      resizeMode="cover" 
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 16 }}>
            {/* Logo */}
            <Image
              source={images.logo1} 
              style={{ width: logo1Size.width, height: logo1Size.height, marginTop: 40 }} 
              resizeMode='contain'
            />
            
            {/* Tagline */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                Share. Connect. Engage.
              </Text>
            </View>

            {/* Description */}
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 50, textAlign: 'center' }}>
              Share your knowledge as you engage and connect with other people.
            </Text>

            {/* Continue Button */}
            <CustomButton
              title="Continue To Connect"
              handlePress={() => router.push('/sign-in')}
              containerStyles={{ width: '90%', marginTop: 20 }} 
            />
          </View>
        </ScrollView>

        {/* StatusBar customization */}
        <StatusBar backgroundColor="orange" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}
