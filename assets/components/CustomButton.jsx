import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Custom button component
const CustomButton = ({ title, handlePress, containerStyles, textStyles }) => {
    return (
        <TouchableOpacity style={[styles.button, containerStyles]} onPress={handlePress}>
            <Text style={[styles.buttonText, textStyles]}>{title}</Text>
        </TouchableOpacity>
    );
};

// Default styles for the button
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00008B',  // Button background color
        paddingVertical: 12,          // Padding inside the button (top-bottom)
        paddingHorizontal: 25,       // Padding inside the button (left-right)
        borderRadius: 8,             // Rounded corners
        alignItems: 'center',        // Center the text horizontally
        justifyContent: 'center',    // Ensure text is centered vertically
    },
    buttonText: {
        color: '#fff',               // Text color
        fontSize: 16,                // Font size of the button text
        fontWeight: 'bold',          // Bold text for emphasis
    },
});

export default CustomButton;
