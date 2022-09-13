import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from '@src/api';
import {ProductList} from '@src/components';

const Home = () => {
  const {data, isError, isFetching} = useQuery(['products'], fetchProducts);

  if (isFetching) {
    return (
      <ActivityIndicator
        className="flex-1 items-center justify-center"
        size={'large'}
      />
    );
  }
  if (isError) {
    return (
      <View className="items-center justify-center flex-1">
        <Text className="text-red-500 mb-3">Something went wrong..</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 flex-row">
      <ProductList products={data || []} />
      <View className="border-2" />
    </View>
  );
};

export default Home;
