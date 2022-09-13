import {View, Text} from 'react-native';
import React from 'react';
interface Props {
  title: string;
}
export const Header: React.FC<Props> = ({title}) => {
  return (
    <View className="h-10 border-b border-gray-500 justify-center items-center mb-3 bg-secondary">
      <Text className="font-bold uppercase text-md text-white">{title}</Text>
    </View>
  );
};
