import React from "react"
import Button from "../Button"
import circle from "../../images/circle.png"
import { kebabCase } from "lodash"

import "./index.scss"

const Hero = ({ title, teaser, action, content }) => (
  <div className="hero-wrapper">
    <div className="hero-inner">
      <img className="hero-image" src={circle} />
      <div className="hero-teaser">
        <h1>{title}</h1>
        <p>{teaser}</p>
        {action && (
          <div className="hero-action">
            <Button.Primary label={action.label} url={action.url} />
          </div>
        )}
      </div>
      <div className="hero-content">
        <h2 id={kebabCase(content.title)}>{content.title}</h2>
        {Array.isArray(content.description) &&
          content.description.map(it => <p>{it}</p>)}
      </div>
    </div>
  </div>
)

export default Hero
