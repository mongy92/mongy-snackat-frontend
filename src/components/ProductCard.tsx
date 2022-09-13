import {View, Text, Image} from 'react-native';
import React from 'react';
import {IProduct} from '@src/types';
import {Card, Button} from '@src/components';

interface Props {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
  inCart?: boolean;
}

export const ProductCard: React.FC<Props> = ({
  product,
  onAddToCart,
  inCart,
}) => {
  function addToCart() {
    onAddToCart(product);
  }
  return (
    <Card>
      <Image source={{uri: product.image}} className="w-24 h-32 self-center" />
      <Text className="font-semibold text-xs text-black mt-3" numberOfLines={2}>
        {product.title}
      </Text>
      <View className="flex-row justify-between  mt-3">
        <Text className="font-bold text-black text-sm">{`$${product.price}`}</Text>
        <Text className="font-bold text-black text-sm">
          {product.rating.rate}/{product.rating.count}
        </Text>
      </View>
      {!inCart && (
        <Button classes="w-full mt-3" onPress={addToCart} title="Add to cart" />
      )}
    </Card>
  );
};
