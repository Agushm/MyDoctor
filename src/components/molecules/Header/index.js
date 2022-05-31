import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {IconButton, SizedBox} from '../../atoms';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.header}>
      <IconButton
        icon="black_arrow_back"
        iconColor={colors.primary}
        onPress={onPress}
      />
      <Text style={styles.title}>{title}</Text>
      <SizedBox width={24} />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.default,
    textAlign: 'center',
  },
});
