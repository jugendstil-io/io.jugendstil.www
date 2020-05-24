import React from "react"

import "./index.scss"
import logo from "../../../../asset/jugendstil_io_logo_small.png"
import URL from "../../../url"
import BurgerMenu from "../BurgerMenu"

const links = [
  {
    name: "Service",
    url: "#",
  },
  {
    name: "Industries",
    url: "#",
  },
  {
    name: "About Us",
    url: "#",
  },
  {
    name: "Contact",
    url: URL.CONTACT,
  },
  {
    name: "Join us",
    url: "#",
  },
]

const TopNavigation = () => (
  <nav className="top-navigation" role="navigation">
    <a className="logo" href="/">
      <img src={logo} width={140} />
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
