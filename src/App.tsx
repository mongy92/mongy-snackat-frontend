import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Home from '@src/screens/Home';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
