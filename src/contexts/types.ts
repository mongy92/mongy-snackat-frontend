import {ICartItem, IProduct} from '@src/types';

export interface CartContextType {
  cart: ICartItem[];
  totalPrice: number;
  addtoCart: (item: IProduct) => void;
  removeFromCart: (id: number) => void;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
}
