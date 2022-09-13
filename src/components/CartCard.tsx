import {View, Text, Image} from 'react-native';
import React from 'react';

import {ICartItem} from '@src/types';
import {Card} from '@src/components/Card';
import {Button, Counter} from '@src/components';

interface Props {
  item: ICartItem;
  onRemove: (id: number) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

export const CartCard: React.FC<Props> = ({
  item,
  onRemove,
  onIncrement,
  onDecrement,
}) => {
  function removeHandler() {
    onRemove(item.product.id);
  }

  function incramentHandler() {
    onIncrement(item.product.id);
  }

  function decrementHandler() {
    onDecrement(item.product.id);
  }
  return (
    <Card>
      <Image
        source={{uri: item.product.image}}
        className="w-24 h-32 self-center"
      />
      <Text className="font-semibold text-xs text-black mt-3" numberOfLines={2}>
        {item.product.title}
      </Text>
      <View className="flex-row mt-3 items-center justify-between">
        <Counter
          value={item.quantity}
          onDecrement={decrementHandler}
          onIncrement={incramentHandler}
        />
        <Button title="Remove" onPress={removeHandler} />
      </View>
    </Card>
  );
};
