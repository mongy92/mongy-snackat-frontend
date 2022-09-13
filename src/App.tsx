import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import CartContextProvider from '@src/contexts/CartContext';
import Home from '@src/screens/Home';

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
