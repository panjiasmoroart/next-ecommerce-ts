import { useHook } from "@common/utils/use-hook"

const useAddItem = () => {
  debugger
  const hook = useHook((hooks) => {
    debugger
    return hooks.cart.useAddItem
  })
  // return useHook shopify>cart>use-add-item
  debugger
  return hook.useHook()
}
export default useAddItem