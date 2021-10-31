export type ApiFetcherOptions = {
  url: string
  query: string
  variables?: any
}

export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  apiUrl: string 
  // before
  // fetch<T>(
  //   options: ApiFetcherOptions
  // ): Promise<{data: T}>
  // after 
  fetch<T>(
    options: ApiFetcherOptions
  ): Promise<ApiFetcherResults<T>>
}

