import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from '@src/api';

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
  console.log(data);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
