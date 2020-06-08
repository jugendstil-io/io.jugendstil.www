import React from "react"
import { GitHub, Instagram, LinkedIn, Twitter } from "../../icons/index"
import URL from "../../url"
import contact from "../../contact.json"

import "./index.scss"

const style = {
  iconHeight: 40,
  iconWidth: 40,
}

const Footer = () => (
  <footer>
    <div className="wrapper">
      <nav className="footer-navigation">
        <span className="visible-sm visible-md visible-lg">
          <ul>
            <li>
              <a href={URL.SERVICE.INDEX}>Service</a>
            </li>
            <li>
              <a href={URL.ABOUT_US}>About Us</a>
            </li>
            <li>
              <a href={URL.CONTACT}>Contact</a>
            </li>
            <li>
              <a
                target="_blank"
                href={contact.find(it => it.hq === true).linkedin}
              >
                <LinkedIn height={style.iconHeight} width={style.iconWidth} />
              </a>
              <a
                target="_blank"
                href={contact.find(it => it.hq === true).twitter}
              >
                <Twitter height={style.iconHeight} width={style.iconWidth} />
              </a>
              <a
                target="_blank"
                href={contact.find(it => it.hq === true).github}
              >
                <GitHub height={style.iconHeight} width={style.iconWidth} />
              </a>
              <a
                target="_blank"
                href={contact.find(it => it.hq === true).instagram}
              >
                <Instagram height={style.iconHeight} width={style.iconWidth} />
              </a>
            </li>
          </ul>
        </span>
      </nav>
      <hr />
      <ul className="footer-legal">
        <li>
          <a href={URL.PRIVACY_STATEMENT}>Privacy Statement</a>
        </li>
        <li>
          <a href={URL.MODERN_SLAVERY_STATEMENT}>Modern Slavery Statement</a>
        </li>
        <li className="right">
          © {new Date().getFullYear()} Jugendstil_IO. All Rights Reserved.
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
