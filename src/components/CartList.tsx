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
  const {cart, removeFromCart, incrementQty, decrementQty, totalPrice} =
    useCart();
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

  function renderTotal() {
    if (cart.length) {
      return (
        <View className="flex-row p-2 bg-white border-t items-center justify-center">
          <Text className="font-bold mr-2">Total price : </Text>
          <Text className="text-sm">USD {totalPrice.toFixed(2)}</Text>
        </View>
      );
    }
    return null;
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
      {cart.length > 0 && (
        <View className="flex-row p-2 bg-white border-t items-center justify-center">
          <Text className="font-bold mr-2">Total price : </Text>
          <Text className="text-xs font-semibold">
            ${totalPrice.toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
