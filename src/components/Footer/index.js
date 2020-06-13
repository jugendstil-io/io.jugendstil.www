import React from "react"
import { GitHub, Instagram, LinkedIn, Twitter } from "../../icons/index"
import URL from "../../url"
import contact from "../../data/contact.json"

import "./index.scss"

const style = {
  iconHeight: 40,
  iconWidth: 40,
}

const links = [
  { url: URL.SERVICE.INDEX, name: "Services" },
  { url: URL.ABOUT_US, name: "About Us" },
  { url: URL.THOUGHTS_ON_PROGRAMMING, name: "Thoughts" },
  { url: URL.CONTACT, name: "Contact" },
]

const Footer = () => (
  <footer className={"page-footer"}>
    <div className="wrapper">
      <nav className="footer-navigation">
        <ul>
          {links.map(it => (
            <li>
              <a href={it.url}>{it.name}</a>
            </li>
          ))}
          <li className="visible-sm visible-md visible-lg">
            <ul>
              <li>
                <a
                  target="_blank"
                  href={contact.find(it => it.hq === true).linkedin}
                >
                  <LinkedIn height={style.iconHeight} width={style.iconWidth} />
                </a>
                <a
                  href={contact.find(it => it.hq === true).twitter}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Twitter height={style.iconHeight} width={style.iconWidth} />
                </a>
                <a
                  href={contact.find(it => it.hq === true).github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHub height={style.iconHeight} width={style.iconWidth} />
                </a>
                <a
                  href={contact.find(it => it.hq === true).instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Instagram
                    height={style.iconHeight}
                    width={style.iconWidth}
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="footer-legal">
        <span className="visible-sm visible-md visible-lg">
          <ul>
            <li>
              <a href={URL.PRIVACY_STATEMENT}>Privacy Statement</a>
            </li>
            <li>
              <a href={URL.MODERN_SLAVERY_STATEMENT}>
                Modern Slavery Statement
              </a>
            </li>
            <li className="right">
              © {new Date().getFullYear()} Jugendstil_IO. All Rights Reserved.
            </li>
          </ul>
        </span>
        <span className="visible-xs hidden-sm hidden-md hidden-lg">
          <ul>
            <li>
              <a href={URL.PRIVACY_STATEMENT}>Privacy Statement</a>
            </li>
            <li>
              <a href={URL.MODERN_SLAVERY_STATEMENT}>
                Modern Slavery Statement
              </a>
            </li>
            <li />
          </ul>
          <p
            style={{
              fontSize: `x-small`,
              paddingTop: `1.3rem`,
            }}
          >
            © {new Date().getFullYear()} Jugendstil_IO. All Rights Reserved.
          </p>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
