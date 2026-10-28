// Week 18: a pure reducer — easy to unit test (see cartReducer.test.js).
// State shape: { items: [{ id, title, price, quantity }] }

export const initialCartState = { items: [] };

export function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((item) => item.id === action.product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        };
      }
      const { id, title, price } = action.product;
      return { items: [...state.items, { id, title, price, quantity: 1 }] };
    }
    // TODO 'remove'       — action.id: remove the line entirely
    // TODO 'setQuantity'  — action.id, action.quantity: update; remove the line when quantity < 1
    // TODO 'clear'        — empty the cart
    default:
      throw new Error(`Unknown cart action: ${action.type}`);
  }
}

export function selectItemCount(state) {
  return state.items.reduce((sum, item) => sum + item.quantity, 0);
}

export function selectTotal(state) {
  // TODO: sum of price × quantity, rounded to 2 decimal places
  return 0;
}
