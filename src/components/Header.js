import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    const { textStyle, viewStyle } = styles;
    const { headerText } = this.props;
    return (
      <View style = {viewStyle}>
        <Text style = {textStyle}> {headerText} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#D1ECC3",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontSize:20,
        color: '#2E5719',
    }
});

