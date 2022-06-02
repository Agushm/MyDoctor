import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({title, fontSize, align}) => {
  return <Text style={styles.title(fontSize, align)}>{title}</Text>;
};
export default Link;

const styles = StyleSheet.create({
  title: (fontSize, align) => ({
    marginBottom: 6,
    fontSize: fontSize ?? 12,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
    textAlign: align,
    color: colors.text.secondary,
  }),
});
