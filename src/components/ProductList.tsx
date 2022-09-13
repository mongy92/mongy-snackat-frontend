import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import React from 'react';

import {Header, ProductCard} from '@src/components';
import {IProduct} from '@src/types';

interface Props {
  products: IProduct[];
}
export const ProductList: React.FC<Props> = ({products}) => {
  function renderItem({item}: ListRenderItemInfo<IProduct>) {
    return <ProductCard product={item} onAddToCart={() => {}} inCart={false} />;
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
