import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, SizedBox, Input, Header} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Register" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <SizedBox height={10} />
        <Input label="Jobs" />
        <SizedBox height={10} />
        <Input label="Email Address" />
        <SizedBox height={10} />
        <Input label="Password" />
        <SizedBox height={40} />
        <Button btnColor="#0BCAD4" title="Continue" textColor="white" />
      </View>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    marginTop: 0,
  },
});
