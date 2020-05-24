import PropTypes from "prop-types"
import React from "react"

import TopNavigation from "./Navigation/Top/index"

const Header = ({ siteTitle }) => (
  <header>
    <TopNavigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
