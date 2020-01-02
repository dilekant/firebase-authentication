import React, { Component } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import firebase from 'firebase';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';

export default class LoginForm extends Component {
  state  = {
      email: '',
      password: '',
      loading: false,
  };

  clickLogin(){
      this.setState({ loading: true }); 
      const { email, password } = this.state;

      if(email === '' || password === ''){
        this.setState({ loading: false }); 
        Alert.alert(
            'Mesaj',
            'İki alanda dolu olmalı!',
            [
                { text: 'Tamam', onPress: () => null }
            ]
        );
      }
      else {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFail.bind(this));
        });
      }      
  }

  loginSuccess() {
      console.log('başarılı');
      this.setState({ loading: false });
  }

  loginFail() {
      console.log('hatalı');
      this.setState({ loading: false });
      Alert.alert(
          'Mesaj',
          'Kullanıcı adı veya şifreniz hatalı!',
          [
              { text: 'Tamam', onPress: () => null }
          ]
      );
  }

  renderButton() {
      if(!this.state.loading){
          return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
      }
      return <Spinner size='small' />
  }

  render() {
    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
            <TextInput 
            placeholder='E-mail'
            style={inputStyle}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
        </CardSection>
        <CardSection>
            <TextInput
            secureTextEntry 
            placeholder='Şifre'
            style={inputStyle}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            />
        </CardSection>
        <View style={styles.subContainerStyle}>
            {this.renderButton()}
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    subContainerStyle: {
        padding: 6,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: '5%',
        borderRadius: 15,
      },
});