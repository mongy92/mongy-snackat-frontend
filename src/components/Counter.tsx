import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@src/components/Button';

interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter: React.FC<Props> = ({value, onDecrement, onIncrement}) => {
  return (
    <View className="flex-row items-center">
      <Button
        title="-"
        classes="mr-2 w-6"
        onPress={onDecrement}
        disabled={value === 1}
      />
      <Text className="text-md font-bold">{value}</Text>
      <Button title="+" classes="ml-2 w-6" onPress={onIncrement} />
    </View>
  );
};
