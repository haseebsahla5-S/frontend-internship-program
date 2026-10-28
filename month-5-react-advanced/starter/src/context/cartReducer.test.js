import { cartReducer, initialCartState, selectItemCount } from './cartReducer.js';

const shirt = { id: 1, title: 'Shirt', price: 20, image: 'x.png' };

describe('cartReducer', () => {
  it('adds a new product with quantity 1', () => {
    const state = cartReducer(initialCartState, { type: 'add', product: shirt });
    expect(state.items).toEqual([{ id: 1, title: 'Shirt', price: 20, quantity: 1 }]);
  });

  it('increments quantity when the product is already in the cart', () => {
    let state = cartReducer(initialCartState, { type: 'add', product: shirt });
    state = cartReducer(state, { type: 'add', product: shirt });
    expect(state.items[0].quantity).toBe(2);
    expect(selectItemCount(state)).toBe(2);
  });

  it('does not mutate the previous state', () => {
    const before = structuredClone(initialCartState);
    cartReducer(initialCartState, { type: 'add', product: shirt });
    expect(initialCartState).toEqual(before);
  });

  // Week 19: turn these into real tests once the actions exist.
  it.todo('removes a line with "remove"');
  it.todo('updates quantity with "setQuantity" and removes the line below 1');
  it.todo('empties the cart with "clear"');
  it.todo('selectTotal sums price × quantity');
});
