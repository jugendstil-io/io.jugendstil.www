import colors from "../../../styles/colors"
import React from "react"

import "./index.scss"

const TopNavigation = () => (
  <nav className="top-navigation">
    <ul>
      <li>
        <a href="/">
          JUGENDSTIL.<span style={{ color: colors.violet }}>IO</span>
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
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Join us</a>
      </li>
    </ul>
  </nav>
)

export default TopNavigation
