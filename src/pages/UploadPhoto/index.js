import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconAddPhoto, ILUserPhotoNull} from '../../assets';
import {Button, Header, Link, SizedBox} from '../../components';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.getBack()} />

      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={ILUserPhotoNull} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.job}>Shayna Melinda</Text>
        </View>

        <View>
          <Button
            title="Upload and Continue"
            btnColor={colors.primary}
            textColor={colors.white}
          />
          <SizedBox height={30} />
          <Link title="Skip for this" fontSize={16} align="center" />
        </View>
      </View>
    </View>
  );
};
export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    marginTop: 40,
    textAlign: 'center',
  },
  job: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 10,
    textAlign: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 5,
  },
});
