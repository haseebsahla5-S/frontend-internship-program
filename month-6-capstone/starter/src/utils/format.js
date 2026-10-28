const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export function formatCurrency(amount) {
  return currency.format(amount);
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' });
}
