import { formatCurrency } from './format.js';

describe('formatCurrency', () => {
  it('formats with two decimals and a currency symbol', () => {
    expect(formatCurrency(1234.5)).toBe('$1,234.50');
  });
});
