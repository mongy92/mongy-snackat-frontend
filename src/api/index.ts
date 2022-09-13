import {IProduct} from '../types';

const BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<IProduct[]> {
  const response = await fetch(`${BASE_URL}/products`);
  const json = await response.json();
  return json;
}
