import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Card extends Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.containerStyle}>
          {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: '12.5%',
        marginRight: '12.5%',
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});