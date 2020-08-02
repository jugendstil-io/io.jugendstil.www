import "./index.scss"
import React from "react"

import "./index.scss"

export const Banner = ({ src, description }) => (
  <div className="banner">
    <img src={src} alt={description} />
  </div>
)

export default Banner
