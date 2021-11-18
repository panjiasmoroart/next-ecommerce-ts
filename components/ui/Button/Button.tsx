import { FC, ReactNode, ButtonHTMLAttributes, ComponentType, HTMLAttributes } from "react"
import { LoadingDots } from "@components/ui"
import style from "./Button.module.css"
import cn from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  // onClick: () => void
  isLoading?: boolean
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
  href?: string,
}

const Button: FC<Props> = ({
  children, 
  className,
  isLoading = false,
  Component = "button",
  ...rest
}) => {
  const rootClassName = cn(
    style.root,
    className,
    {
      [style.loading]: isLoading
    }
  )
  return (
    <Component
      className={rootClassName}
      type="Component"
      {...rest}
    >
      {children}
      {isLoading && 
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      }
    </Component>
  )
}

export default Button