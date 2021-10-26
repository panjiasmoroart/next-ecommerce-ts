import Home from "pages";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

export default Layout;

