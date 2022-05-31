import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({title, btnColor, textColor}) => {
  return (
    <View style={styles.container(btnColor)}>
      <Text style={styles.title(textColor)}>{title}</Text>
    </View>
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
    fontWeight: '600',
    color: textColor,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  }),
});
