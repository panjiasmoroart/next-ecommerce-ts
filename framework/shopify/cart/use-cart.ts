import useCart from "@common/cart/use-cart"

export default useCart

export const handler = {
  
  fetchOptions: {
    // get checkout query
    query: "query { hello }"
  },
  
  async fetcher({
    fetch, 
    options,
    input: { checkoutId }
  }: any) {
    const data = await fetch({...options})
    // we need checkoutId
    console.log(checkoutId)
    debugger
    
    // get chekcoutId

    // if there is no checkout then crate checkout
    return { data }
  },

  useHook: ({useData}: any) => {
    const data = useData()
    return {
      data
    }
  }
}