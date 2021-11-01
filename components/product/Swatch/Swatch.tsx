import { FC } from "react"
import style from "./Swatch.module.css"
import { Check } from "@components/icons"

interface Props {
  color?: string
  label?: string
  variant?: "size" | "color" | string
}


const Swatch: FC<Props> = ({color, label, variant}) => {

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
    >
      {/* <span>
        <Check />
      </span> */}
      {variant === "size" ? label : null}
    </button>
  )
}


export default Swatch