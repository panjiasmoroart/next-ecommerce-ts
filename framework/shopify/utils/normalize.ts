import { 
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct 
} from "../schema";

import { Product } from "@common/types/product";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge>}) => 
  // debugger
  edges.map(({ node: {originalSrc: url, ...rest} }) => (
    // debugger
    {
      // url: `/images/${node.originalSrc}`
      url: `/images/${url}`,
      ...rest
    }
  ))

// const num1 = "9"
// const num2 = +num1
// num2
// 9

// const num3 = num1
// num3
// "9"

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  value: +amount,
  currencyCode
})  

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest
  }

  return  product;
}