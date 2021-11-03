import useCart from "@common/cart/use-cart"

export default useCart

export const handler = {
  fetchOptions: {
    query: ""
  },
  fetcher() {
    debugger
    return {
      data: "cart ready"
    }
  },
  useHook: ({fetch}: any) => {
    debugger
    const data = fetch()
    debugger
    return {
      data
    }
  }
}