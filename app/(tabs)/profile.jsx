import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const backgroundImage = require('../../assets/images/background.png');
const profileImage = require('../../assets/images/profile4.jpg');
const postImage1 = require('../../assets/images/samsung.jpg');
const postImage2 = require('../../assets/images/thomas.jpg');

const { height, width } = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  const historyPosts = [
    { id: 1, type: 'status', content: 'Just completed a new project! Feeling proud.', time: '1 hour ago' },
    { id: 2, type: 'image', content: 'Samsung Event Highlights', image: postImage1, time: '2 days ago' },
    { id: 3, type: 'status', content: 'Loving the new features in React Native! 🚀', time: '5 days ago' },
    { id: 4, type: 'image', content: 'Technology Milestones: Thomas Edison', image: postImage2, time: '1 week ago' },
  ];

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out successfully.', [{
      text: 'OK',
      onPress: () => navigation.navigate('index') // Navigate to the SignIn screen
    }]);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover" blurRadius={5}>
      <View style={styles.container}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.userName}>Gennesis Ashly</Text>
        <Text style={styles.userBio}>Passionate about technology and coding. Tweet Tech enthusiast.</Text>
        <TouchableOpacity style={styles.editButton}><Text style={styles.editButtonText}>Edit Profile</Text></TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}><Text style={styles.logoutButtonText}>Log Out</Text></TouchableOpacity>
      </View>

      <ScrollView style={styles.historyContainer}>
        <Text style={styles.historyTitle}>History</Text>

        {historyPosts.map(post => (
          <View key={post.id} style={styles.historyPost}>
            <Text style={styles.postTime}>{post.time}</Text>
            {post.type === 'status' ? (
              <Text style={styles.statusText}>{post.content}</Text>
            ) : (
              <View style={styles.imagePostContainer}>
                <Text style={styles.postContent}>{post.content}</Text>
                <Image source={post.image} style={styles.postImage} resizeMode="contain" />
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 20,
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  userBio: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  editButton: {
    backgroundColor: '#121481',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
  },
  editButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#121481',
  },
  historyContainer: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
    color: 'black',
  },
  historyPost: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  postTime: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  statusText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  imagePostContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default Profile;