import React from 'react';
import {View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View />
    </QueryClientProvider>
  );
};

export default App;
