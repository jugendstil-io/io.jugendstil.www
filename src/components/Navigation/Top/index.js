import React from "react"

import "./index.scss"
import logo from "../../../../asset/jugendstil_io_logo_small.png"

const TopNavigation = () => (
  <nav className="top-navigation">
    <ul>
      <li>
        <a href="/">
          <img src={logo} width={140}/>
        </a>
      </li>
      <li>
        <a href="#">Service</a>
      </li>
      <li>
        <a href="#">Industries</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="/contact/">Contact</a>
      </li>
      <li>
        <a href="#">Join us</a>
      </li>
    </ul>
  </nav>
)

export default TopNavigation
