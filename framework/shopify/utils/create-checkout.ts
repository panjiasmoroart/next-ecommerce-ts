import { ApiFetcher } from "@common/types/api"
import { CheckoutCreatePayload, Checkout, Maybe } from "@framework/schema"
import { checkoutCreateMutation } from "./mutations"

const createCheckout = async (
  fetch: ApiFetcher<{checkoutCreate: CheckoutCreatePayload}>
): Promise<Maybe<Checkout | undefined>> => {
  const { data } = await fetch({
    query: checkoutCreateMutation
  })

  const { checkout } = data.checkoutCreate 
  const checkoutId = checkout?.id
  debugger  

  return checkout
}
export default createCheckout