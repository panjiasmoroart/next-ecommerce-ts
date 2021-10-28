import { FC } from "react"
import Link from "next/link"
import style from "./Usernav.module.css"

const Usernav: FC = () => {
  return(
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          Cart
        </li>
        <li className={style.item}>
          <Link href="/">
            <a>
              Wishlist
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Usernav;