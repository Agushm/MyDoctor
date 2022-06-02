import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.input.border,
    borderRadius: 10,
    padding: 12,
  },
});
