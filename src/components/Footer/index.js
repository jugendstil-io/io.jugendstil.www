import React from "react"
import { LinkedIn, Twitter } from "../../icons/index"

import "./index.scss"

const style = {
  iconHeight: 40,
  iconWidth: 40,
}

const Footer = () => (
  <footer>
    <div className="wrapper">
      <nav className="footer-navigation">
        <ul>
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
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/jugendstil-io/"
            >
              <LinkedIn height={style.iconHeight} width={style.iconWidth} />
            </a>
            <a target="_blank" href="https://twitter.com/jugendstil_io/">
              <Twitter height={style.iconHeight} width={style.iconWidth} />
            </a>
          </li>
        </ul>
      </nav>
      <hr />
      <ul className="location-list">
        <li>Barcelona</li>
        <li>Berlin</li>
        <li>London</li>
        <li className="right">
          © {new Date().getFullYear()} Jugendstil. All Rights Reserved.
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
