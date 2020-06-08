import React from "react"
import Button from "../Button"
import circle from "../../images/circle.png"

import "./index.scss"

const Hero = ({ title, description, action }) => (
  <div className="hero-wrapper">
    <div className="row">
      <div className="col-md-7">
        <div className="hero-content">
          <h1 className="title">{title}</h1>
          <div>
            <div className="hero-description">
              <p>{description}</p>
              {action && (
                <Button.Primary label={action.label} url={action.url} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${circle})`,
          }}
        />
      </div>
    </div>
  </div>
)

export default Hero
