import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Hand from '../assets/Hand';
import Receipts from '../assets/Receipts';
import Button from '../Components/Button';

export default function Onboarding({navigation}) {
  return (
    <View style={styles.Onboarding}>
        <View style={styles.imageBackground}>
            <View style={styles.image}>
                <Receipts />
            </View>
            <View>
                <Text style={styles.textLg}>Say goodbye <Hand /> {"\n"} to paper receipts</Text>
            </View>
        </View>
        
        <View>
            <TouchableHighlight 
              onPress={()=> navigation.navigate("landingPage")}
            >
            <Button 
                text="Get Started"
                background="#fafafa"
                bordercolor="#fafafa"
                textcolor="#404CCF"
                
            />
            </TouchableHighlight>
            
            <Button 
                text="Login"
                background="#404CCF"
                bordercolor="#fafafa"
                textcolor="#fafafa"
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Onboarding: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#404CCF",
    padding: 30,
  },
  imageBackground:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: 70
  },
  image:{
      marginBottom: 20
  },
  textLg: {
    fontWeight: "700",
    color: "#fafafa",
    fontSize: 26,
    textAlign: "center"
  }
});
