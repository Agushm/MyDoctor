import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, SizedBox, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = () => {
  return (
    <View style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      </View>
      <SizedBox height={24} />
      <Input label="Email Address" />
      <SizedBox height={20} />
      <Input label="Password" />
      <SizedBox height={10} />
      <Link title="Forgot My Password" fontSize={12} />
      <SizedBox height={40} />
      <Button
        btnColor={colors.button.primary.background}
        textColor={colors.button.primary.text}
        title="Sign In"
      />
      <SizedBox height={30} />
      <Link title="Create New Account" fontSize={16} align="center" />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 40,
  },
  title: {
    fontSize: 20,
    maxWidth: 155,
    fontWeight: '600',
    color: 'black',
    marginTop: 40,
    fontFamily: fonts.primary[600],
  },
});
