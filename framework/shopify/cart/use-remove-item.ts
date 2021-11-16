import { getCheckoutId } from '@framework/utils';
import useRemoveItem from "@common/cart/use-remove-item"
import { Cart } from "@common/types/cart"
import { MutationHook } from "@common/types/hooks"
import { CheckoutLineItemsRemovePayload } from "@framework/schema"

export default useRemoveItem

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
    query: "query { hello }"
  },

  async fetcher({
    input: {id},
    options,
    fetch
  }) {
    debugger
    const { data } = await fetch({
      ...options,
      variables: {
        checkoutId: getCheckoutId(),
        lineItemsIds: [id]
      }
    })
    debugger
    return data + "_modified!!!" as any
  },

  useHook: ({fetch}) => () => {
    return async (input) => {
      debugger
      const data = await fetch(input)
      debugger
      return data
    }
  }
}