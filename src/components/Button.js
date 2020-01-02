import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class extends Component {
  render() {
    const { onPress, children } = this.props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle} > 
            <Text style={styles.textStyle}> {children} </Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#18370E',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#0C2304',
        marginLeft: 30,
        marginRight: 30,
        height: 60,
        justifyContent: 'center'
    }
});
