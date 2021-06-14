import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Button({text,background,textcolor,bordercolor}) {
    const styles = StyleSheet.create({
        button: {
          flex: 1,
          backgroundColor: background,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: bordercolor,
          height: 20,
          padding: 20,
          marginTop: 8,
          marginBottom: 8,
        },
        buttonText:{
            color: textcolor,
        }
      });
      
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
}

