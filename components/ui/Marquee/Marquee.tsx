import { ReactNode, FC } from "react";
import style from "./Marquee.module.css";
import ReactFastMarquee from "react-fast-marquee";

interface Props {
  children: ReactNode[] | ReactNode
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className={style.root}>
      <ReactFastMarquee speed={50} gradient={true}>
        <div className={style.container}>
          {children}
        </div>
      </ReactFastMarquee>
    </div>
  )
}
export default Marquee;