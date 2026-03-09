const WA_NUMBER = '919623300461';

export function waLink(message?: string): string {
  const base = `https://wa.me/${WA_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink('Hi Akash, I want to enquire about supplements at BodyNation.');
export const WA_ORDER   = waLink('Hi Akash, I want to place an order at BodyNation.');
