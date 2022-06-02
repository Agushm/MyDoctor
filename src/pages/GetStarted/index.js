import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, SizedBox} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          btnColor={colors.button.primary.background}
          textColor={colors.button.primary.text}
          onPress={() => navigation.navigate('Register')}
        />
        <SizedBox height={16} />
        <Button
          title="Sign In"
          btnColor={colors.button.secondary.background}
          textColor={colors.button.secondary.text}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    marginTop: 91,
    fontFamily: fonts.primary[600],
  },
});
