import React from "react"
import Image from "../image"
import Button from "../Button"

import "./index.scss"

const Hero = () => (
  <div className="row">
    <div className="col-md-7">
      <div className="hero-content">
        <h1 className="title">#CREATINGIMPACT</h1>
        <div>
          <div className="hero-description">
            <p>
              We empower organisations to create business impact and seamless
              digital experiences through technology.
            </p>
            <Button.Primary label="Contact" url="/contact/" />
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="hero-image">
        <Image />
      </div>
    </div>
  </div>
)

export default Hero
