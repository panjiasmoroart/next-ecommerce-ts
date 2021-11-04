import { useApiProvider } from "@common"
import { ApiFetcher } from "@common/types/api"
import { ApiHooks } from "@common/types/hooks"
import { MutationHook } from "@common/types/hooks"
import { useState } from "react"

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider()
  return fn(hooks)
}

export const useMutationHook = (
  hook: MutationHook
) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    fetch: (input: any) => {
      return hook.fetcher({
        input,
        fetch: fetcher,
        options: hook.fetcherOptions
      })
    }
  })
}

const useData = (hook: any, fetcher: ApiFetcher) => {
  const [data, setData] = useState(null)

  const hookFetcher = async() => {
    debugger
    try {
      return await hook.fetcher({
        fetch: fetcher,
        options: hook.fetchOptions
      })     
    } catch (error) {
      throw error
    }
  }

  debugger
  if (!data) {
    hookFetcher().then(data => {
      debugger
      setData(data)
    })
  }
    
  return data
}

// cache data first if possible
export const useSWRHook = (hook: any) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    useData() {   
      debugger
      const data = useData(hook, fetcher);
      debugger
      return data
    }
  })
}