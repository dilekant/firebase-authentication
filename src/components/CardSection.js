import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardSection extends Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.subContainerStyle}>
          {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    subContainerStyle: {
        padding: 6,
        backgroundColor: '#E3E2DB',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: '5%',
        borderRadius: 15,
      },
});