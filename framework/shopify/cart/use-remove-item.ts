import { checkoutToCart, getCheckoutId } from '@framework/utils';
import useRemoveItem, { UseRemoveItem } from "@common/cart/use-remove-item"
import { Cart } from "@common/types/cart"
import { MutationHook } from "@common/types/hooks"
import { CheckoutLineItemsRemovePayload } from "@framework/schema"
import { checkoutLineItemsRemoveMutation } from '@framework/utils/mutations';
import useCart from './use-cart';

export default useRemoveItem as UseRemoveItem<typeof handler>

type RemoveItemDescriptor = {
  fetcherInput: {
    id: string
  },
  fetcherOutput: {
    checkoutLineItemsRemove: CheckoutLineItemsRemovePayload
  },
  data: Cart
}

export const handler: MutationHook<RemoveItemDescriptor> = {
  fetcherOptions: {
    // query: "query { hello }"
    query: checkoutLineItemsRemoveMutation
  },

  async fetcher({
    input: {id},
    options,
    fetch
  }) {
    
    const { data } = await fetch({
      ...options,
      variables: {
        checkoutId: getCheckoutId(),
        lineItemIds: [id]
      }
    })
    
    const cart = checkoutToCart(data.checkoutLineItemsRemove.checkout)    
    return cart
  },

  useHook: ({fetch}) => () => {
    const { mutate: updateCart } = useCart()
    
    return async (input) => {
      
      const data = await fetch(input)
      updateCart(data, false)
      return data
    }
  }
}