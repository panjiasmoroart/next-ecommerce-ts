import { FC, ReactNode, ButtonHTMLAttributes } from "react"
import style from "./Button.module.css"
import cn from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  // onClick: () => void
  isLoading?: boolean
}

const Button: FC<Props> = ({
  children, 
  className,
  isLoading = false,
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
    <button
      className={rootClassName}
      type="button"
      {...rest}
    >
      {children}
      {isLoading && <div> Loading...</div>}
    </button>
  )
}

export default Button