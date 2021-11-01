import { FC } from "react"
import style from "./Swatch.module.css"
import { Check } from "@components/icons"
import cn from "classnames"

interface Props {
  color?: string
  label?: string
  active?: boolean
  variant?: "size" | "color" | string
  onClick: () => void
}


const Swatch: FC<Props> = ({
  color, 
  label, 
  variant,
  active,
  ...rest
}) => {

  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  const rootClassnames = cn(
    style.root,
    {
      [style.active]: active,
      [style.color]: color,
      [style.size]: variant === "size",
    }
  )

  return (
    <button
      style={color ? {backgroundColor: color} : {}}
      className={rootClassnames}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === "size" ? label : null} 
    </button>
  )
}


export default Swatch