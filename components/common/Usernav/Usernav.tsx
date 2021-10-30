import { FC } from "react"
import Link from "next/link"
import style from "./Usernav.module.css"
import { Bag as Cart, Heart } from "@components/icons"
import { useUI } from "@components/ui/context"

const Usernav: FC = () => {
  const ui = useUI();

  return(
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Cart onClick={ui.setSidebarOpen} />
        </li>
        <li className={style.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Usernav;