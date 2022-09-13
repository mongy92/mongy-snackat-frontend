import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {CartCard} from '@src/components/CartCard';
import {Header} from '@src/components/Header';
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
