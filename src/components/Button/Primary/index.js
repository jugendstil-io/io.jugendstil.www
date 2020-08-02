import PropTypes from "prop-types"
import React from "react"

import "./index.scss"

const Button = ({ url, label, style }) => (
  <a className="btn btn-primary" href={url} style={style}>
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
