import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CartCard, Header} from '@src/components';
import {ICartItem} from '@src/types';
import {useCart} from '@src/hooks/useCart';

export const CartList: React.FC = ({}) => {
  const {cart, removeFromCart, incrementQty, decrementQty} = useCart();
  function renderItem({item}: ListRenderItemInfo<ICartItem>) {
    return (
      <CartCard
        item={item}
        onRemove={removeFromCart}
        onIncrement={incrementQty}
        onDecrement={decrementQty}
      />
    );
  }

  return (
    <View className="w-1/2">
      <Header title="Cart" />
      <FlatList
        data={cart}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ListEmptyComponent={
          <Text className="text-center">Please add items...</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
