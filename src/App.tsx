import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Home from '@src/screens/Home';
import CartContextProvider from '@src/contexts/CartContext';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <Home />
      </CartContextProvider>
    </QueryClientProvider>
  );
};

export default App;
