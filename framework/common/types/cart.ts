export interface Discount {
  value: number
}

export interface Cart {
  id: string,
  createdAt: string,
  currency: {
    code: string
  },
  taxesIncluded: boolean,
  // taxes, discounts excluded
  lineItemsSubtotalPrice: number,
  // taxes, discounts included
  totalPrice: number,
  lineItems: any[],
  discounts: Discount[]
}