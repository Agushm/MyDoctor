import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconArrowBack} from '../../../assets';

const IconButton = ({icon, iconColor, onPress}) => {
  const Icon = () => {
    if (icon === 'black_arrow_back') {
      return <IconArrowBack />;
    }
    return <IconArrowBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};
export default IconButton;
