import PropTypes from "prop-types"
import React from "react"

import "./index.scss"

const Button = ({ url, label }) => (
  <a className="btn btn-primary" href={url}>
    <span className="label">{label}</span>
  </a>
)

Button.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
}

Button.defaultProps = {
  label: ``,
  url: ``,
}

export default Button
