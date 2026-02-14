// Currency formatting utilities

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatPriceRange = (min, max) => {
  if (min === null && max === null) return 'All Prices';
  if (min === null) return `Under ${formatCurrency(max)}`;
  if (max === null) return `Above ${formatCurrency(min)}`;
  return `${formatCurrency(min)} - ${formatCurrency(max)}`;
};

// Price ranges in INR for filters
export const priceRanges = [
  { label: 'All Prices', value: null },
  { label: 'Under ₹80,000', value: [0, 80000] },
  { label: '₹80,000 - ₹2,00,000', value: [80000, 200000] },
  { label: '₹2,00,000 - ₹4,00,000', value: [200000, 400000] },
  { label: 'Above ₹4,00,000', value: [400000, null] },
];
