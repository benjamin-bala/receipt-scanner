import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../assets/Logo';
import Button from '../Components/Button';

export default function LandingPage({navigation}) {
  return (
    <View style={styles.register}>
        <View style={styles.imageBackground}>
            <View style={styles.image}>
                <Logo />
            </View>
        </View>
        <View style={styles.form}>
            <View style={styles.formInput}>
                <Text style={styles.formHeading}>Full Name</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='John Doe'
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formHeading}>Email Address</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='someone@name.com'    
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formHeading}>Phone Number</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='0812345678'    
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formHeading}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='*******'
                />
            </View>
        </View>
        <View>
            <Button 
                text="Continue"
                background="#404CCF"
                bordercolor="#fafafa"
                textcolor="#fafafa"
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 30,
  },
  imageBackground:{
      alignItems: "center",
      marginTop: 20,
  },
  image:{
      marginBottom: 20
  },
  form: {
    flex: 1
  },
  formInput: {
    marginTop: 10,
    marginBottom: 10,
  },
  formHeading: {
      color: '#333',
      fontWeight: '600'
  },
  input: {
    borderBottomColor: '#aaa',
    borderBottomWidth: 2,
  },
  textsm: {
    color: "#fafafa",
    fontWeight: "200",
    fontSize: 14,
    textAlign: "center"
  }
});
