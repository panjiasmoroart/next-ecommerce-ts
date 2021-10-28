import { ReactNode, FC } from "react";
import style from "./Marquee.module.css";
import ReactFastMarquee from "react-fast-marquee";
import cn from "classnames";

interface Props {
  children: ReactNode[] | ReactNode
  direction?: "left" | "right"
  variant?: "primary" | "secondary"
  gradient?: boolean
}

const Marquee: FC<Props> = ({ children, direction = "left", variant = "primary", gradient }) => {
  const rootClassName = cn(
    style.root,
    {
      [style.secondary]: variant === "secondary"
    }
  )

  return (
    <div className={rootClassName}>
      <ReactFastMarquee speed={50} gradient={gradient} direction={direction} loop={6}>
        <div className={style.container}>
          {children}
        </div>
      </ReactFastMarquee>
    </div>
  )
}
export default Marquee;