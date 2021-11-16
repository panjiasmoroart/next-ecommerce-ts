import useRemoveItem from "@common/cart/use-remove-item"

export default useRemoveItem

export const handler = {
  fetcherOptions: {
    query: "query { hello }"
  },

  async fetcher({
    input,
    options,
    fetch
  }: any) {
    debugger
    const { data } = await fetch({
      ...options
    })
    debugger
    return data + "_modified!!!"
  },

  useHook: ({fetch}: any) => () => {
    return async (input: any) => {
      debugger
      const data = await fetch(input)
      debugger
      return data
    }
  }
}