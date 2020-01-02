import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import LoginForm from './src/LoginForm';
import Spinner from './src/components/Spinner';
import Button from './src/components/Button';

export default class App extends Component {

  state = { loggedIn: null };

  componentWillMount(){
    try {
      firebase.initializeApp({
        apiKey: "AIzaSyCg7MYH56WsV0RmSXHgmFISQ9jJ0WFNwdk",
        authDomain: "authentication-a28b8.firebaseapp.com",
        databaseURL: "https://authentication-a28b8.firebaseio.com",
        projectId: "authentication-a28b8",
        storageBucket: "authentication-a28b8.appspot.com",
        messagingSenderId: "162476948687",
        appId: "1:162476948687:web:2c750b3b4e683c5bba8bba",
        measurementId: "G-TMCE9BMJLD"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });

    } catch (err) {
      if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error raised', err.stack)
    }}
  }

  clickLogout(){
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <View style={styles.subContainerStyle}>
          <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
        </View>
        );
      case false:
        return (<LoginForm />);
      default:
        return (
         <View>
          <Spinner size="large" />
         </View>
        );

    }
  }

  render() {
    return (
      <View style={{backgroundColor:'white', flex:1}}>
        <Header headerText="Giriş Ekranı" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainerStyle: {
      padding: 6,
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginTop: '5%',
      borderRadius: 15,
    },
});