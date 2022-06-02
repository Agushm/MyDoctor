import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts} from '../../../utils';

const Button = ({title, btnColor, textColor, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(btnColor)} onPress={onPress}>
      <Text style={styles.title(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: btnColor => ({
    backgroundColor: btnColor,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  title: textColor => ({
    fontSize: 18,
    color: textColor,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  }),
});
