import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default class Spinner extends Component {
    render() {
    const { size } = this.props;
    return (
      <View style={styles.spinnerStyle}>
          <ActivityIndicator size={size || 'large'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});