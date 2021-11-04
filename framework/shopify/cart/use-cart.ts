import useCart from "@common/cart/use-cart"

export default useCart

export const handler = {
  
  fetchOptions: {
    query: "query { hello }"
  },
  
  async fetcher({fetch, options}: any) {
    debugger
    const data = await fetch({...options})
    debugger
    return { data }
  },

  useHook: ({useData}: any) => {
    debugger
    const data = useData()
    debugger
    return {
      data
    }
  }
}