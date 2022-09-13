import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import classnames from 'classnames';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  classes?: string;
}

export const Button: React.FC<Props> = ({
  title,
  classes,
  onPress,
  disabled,
}) => {
  const mainStyle = 'rounded-md  items-center justify-center h-6';
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className={classnames(
        mainStyle,
        disabled ? 'bg-gray-500' : 'bg-primary',
        classes,
      )}
      disabled={disabled}
      onPress={onPress}>
      <Text className="text-white font-semibold text-xs px-2">{title}</Text>
    </TouchableOpacity>
  );
};
