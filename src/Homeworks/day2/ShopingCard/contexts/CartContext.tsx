import React, { createContext, useContext, useReducer } from 'react';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  urlImage: string;
};

type CartState = CartItem[];

type Action =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'INCREASE_QUANTITY'; payload: { id: number } }
  | { type: 'DECREASE_QUANTITY'; payload: { id: number } };

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<Action>;
}>({ cart: [], dispatch: () => {} });

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREASE_QUANTITY':
      return state
        .map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
