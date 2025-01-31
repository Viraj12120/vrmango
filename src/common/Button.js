import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({title, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#000000',
    borderRadius: 100,
    width: '100%',
  },
  text: {color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 20},
});

export default Button;
