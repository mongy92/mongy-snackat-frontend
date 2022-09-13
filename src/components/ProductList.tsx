import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import React from 'react';

import {Header, ProductCard} from '@src/components';
import {IProduct} from '@src/types';
import {useCart} from '@src/hooks/useCart';

interface Props {
  products: IProduct[];
}
export const ProductList: React.FC<Props> = ({products}) => {
  const {cart, addtoCart} = useCart();
  function renderItem({item}: ListRenderItemInfo<IProduct>) {
    const inCart = cart.findIndex(i => i.product.id === item.id) !== -1;
    return (
      <ProductCard product={item} onAddToCart={addtoCart} inCart={inCart} />
    );
  }
  return (
    <View className="w-1/2">
      <Header title="Products" />
      <FlatList
        data={products}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
