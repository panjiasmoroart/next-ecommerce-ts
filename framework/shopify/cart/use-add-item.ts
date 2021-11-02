import { useAddItem } from "@common/cart";

export default useAddItem

export const handler = {
  fetcher: (input: any) => {
    debugger
    return JSON.stringify(input) + "_MODIFIED"
  },
  useHook: ({fetch}: any) => {
    return (input: any) => {
      debugger
      const response = fetch(input)
      debugger
      return {
        output: response
      }
    }
  }
}