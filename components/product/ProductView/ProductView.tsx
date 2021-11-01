
import { FC } from 'react'
import Image from "next/image"
import style from './ProductView.module.css'
import { Container, Button } from '@components/ui'
import { Product } from '@common/types/product'
import { ProductSlider, Swatch } from "@components/product"
import cn from 'classnames'

interface Props {
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {

  return (
    <Container>
      <div className={cn(style.root, 'fit', "mb-5")}>
        <div className={cn(style.productDisplay, 'fit')}>
          <div className={style.nameBox}>
            <h1 className={style.name}>
              {product.name}
            </h1>
            <div className={style.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map(image =>
              <div key={image.url} className={style.imageContainer}>
                <Image
                  className={style.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>  
            )}
          </ProductSlider>
        </div>
        <div className={style.sidebar}>
          <section>
            {product.options.map(option => 
              <div key={option.id} className="pb-4">
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map(optValue => 
                    <Swatch 
                      key={`${option.id}-${optValue.label}`}
                      label={optValue.label}
                      color={optValue.hexColor}
                      variant={option.displayName}
                    />
                  )}
                </div>
              </div>
            )}
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button
              className={style.button}
              onClick={() => alert('add to cart')}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView