import { FC } from "react"
import style from "./Swatch.module.css"
import { Check } from "@components/icons"

interface Props {
  color?: string
  label?: string
  variant?: "size" | "color" | string
  onClick: () => void
}


const Swatch: FC<Props> = ({
  color, 
  label, 
  variant,
  ...rest
}) => {

  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  return (
    // <>
    //   { color &&  <>Color: {color}</> }
    //   Label: {label} {` , `}
    // </>
    <button
      style={color ? {backgroundColor: color} : {}}
      className={style.root}
      {...rest}
    >
      {/* <span>
        <Check />
      </span> */}
      {variant === "size" ? label : null} 
    </button>
  )
}


export default Swatch