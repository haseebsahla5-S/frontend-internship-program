import { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialCartState, selectItemCount, selectTotal } from './cartReducer.js';

const CartContext = createContext(null);

// Week 18 TODO: persist the cart — initialise from localStorage (third useReducer
// argument) and save it in an effect whenever `state` changes.
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const value = {
    items: state.items,
    itemCount: selectItemCount(state),
    total: selectTotal(state),
    addItem: (product) => dispatch({ type: 'add', product }),
    removeItem: (id) => dispatch({ type: 'remove', id }),
    setQuantity: (id, quantity) => dispatch({ type: 'setQuantity', id, quantity }),
    clear: () => dispatch({ type: 'clear' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside <CartProvider>');
  return context;
}
