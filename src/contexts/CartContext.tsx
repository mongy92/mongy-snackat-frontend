import {CartContextType} from '@src/contexts/types';
import {ICartItem, IProduct} from '@src/types';
import React, {createContext, PropsWithChildren, useState} from 'react';
import {useMemo} from 'react';

const EMPTY_FUNCTION = () => {};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addtoCart: EMPTY_FUNCTION,
  removeFromCart: EMPTY_FUNCTION,
  incrementQty: EMPTY_FUNCTION,
  decrementQty: EMPTY_FUNCTION,
  totalPrice: 0,
});

const CartContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  function addtoCart(item: IProduct) {
    setCart(prev => [...prev, {product: item, quantity: 1}]);
  }

  function removeFromCart(id: number) {
    setCart(prev => prev.filter(item => item.product.id !== id));
  }

  function changeQty(id: number, qty: number) {
    setCart(prev =>
      prev.map(item => {
        if (item.product.id === id) {
          item.quantity += qty;
        }
        return item;
      }),
    );
  }

  function incrementQty(id: number) {
    changeQty(id, 1);
  }

  function decrementQty(id: number) {
    changeQty(id, -1);
  }

  const totalPrice = useMemo<number>(() => {
    return cart.reduce(
      (prev, curr) => prev + curr.product.price * curr.quantity,
      0,
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addtoCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
