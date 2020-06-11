import React from "react"

import "./index.scss"
import logo from "../../../../asset/jugendstil_io_logo_small.png"
import URL from "../../../url"
import BurgerMenu from "../BurgerMenu"

const links = [
  {
    name: "Services",
    url: URL.SERVICE.INDEX,
  },
  {
    name: "About Us",
    url: URL.ABOUT_US,
  },
  {
    name: "Contact",
    url: URL.CONTACT,
  },
]

const TopNavigation = () => (
  <nav className="top-navigation" role="navigation">
    <a className="logo" href="/">
      <img alt="Jugendstil_IO" src={logo} width={140} />
    </a>

    <span className="visible-sm visible-md visible-lg">
      <ul className="menu-link-list">
        {links.map(it => (
          <li className="menu-link-item" key={it.url}>
            <a href={it.url}>{it.name}</a>
          </li>
        ))}
      </ul>
    </span>
    <span className="visible-xs hidden-sm hidden-md hidden-lg">
      <BurgerMenu className="burger-menu" items={links} />
    </span>
  </nav>
)

export default TopNavigation
