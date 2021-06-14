import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Logolt from '../assets/Logolt';
import Button from '../Components/Button';

export default function LandingPage({navigation}) {
  return (
    <View style={styles.landingpage}>
        <View style={styles.imageBackground}>
            <View style={styles.image}>
                <Logolt />
                <Text style={styles.textsm}>No more paper receipt!</Text>
            </View>
        </View>
        
        <View>
            <Button 
                text="Login"
                background="#404CCF"
                bordercolor="#fafafa"
                textcolor="#fafafa"
            />
            <TouchableHighlight
            onPress={()=> navigation.navigate("register")}
            >
                <Button 
                    text="Register"
                    background="#fafafa"
                    bordercolor="#fafafa"
                    textcolor="#404CCF"
                />
            </TouchableHighlight>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landingpage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#404CCF",
    padding: 30,
  },
  imageBackground:{
      alignItems: "center",
      marginBottom: 50
  },
  image:{
      marginBottom: 20
  },
  textsm: {
    color: "#fafafa",
    fontWeight: "200",
    fontSize: 14,
    textAlign: "center"
  }
});
