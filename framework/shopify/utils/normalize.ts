import { 
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct, 
  ProductOption,
  ProductVariantConnection,
  SelectedOption
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

const normalizeProductOption = ({
  id, 
  values, 
  name: displayName
}: ProductOption) => {
  // console.log("ID", id)
  // console.log("NAME", displayName)
  // console.log("VALUES", values)
  // [ 's', 'l', 'm' ]
  // [{label: "l"}, {label: "s"}, {label: "m"}]

  const normalized = {
    id,
    displayName,
    values: values.map(value => {
      let output: any = {
        label: value
      }

      // color | colour | Colour | Color
      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value
        }
      }

      return output
    })
  }

  return normalized
}

const normalizeProductVariants = ({edges}: ProductVariantConnection) => {
  return edges.map(({node}) => {
    const {id, selectedOptions, sku, title, priceV2, compareAtPriceV2} = node
    
    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({name, value}: SelectedOption) => {
        const options = normalizeProductOption({
          id,
          name,
          values: [value]
        })

        return options
      })
    }
  })
}


export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
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
    options: options ? 
      options.filter(o => o.name !== "Title") 
             .map(o => normalizeProductOption(o)) : [],
    variants: variants ? 
      normalizeProductVariants(variants) : [],         
    ...rest
  }

  return  product;
}