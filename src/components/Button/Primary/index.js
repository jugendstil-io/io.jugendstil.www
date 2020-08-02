import PropTypes from "prop-types"
import React from "react"

import "./index.scss"
import { graphql, useStaticQuery } from "gatsby"

const isValidUrl = string => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ) // fragment locator

  return !!pattern.test(string)
}

const Button = ({ url, label, style }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  const className = "btn btn-primary"
  const isExternal =
    isValidUrl(url) &&
    new URL(url).host !== new URL(site.siteMetadata.siteUrl).host

  if (isExternal) {
    return (
      <a
        className={className}
        href={url}
        rel="noreferrer"
        style={style}
        target="_blank"
      >
        <span className="label">{label}</span>
      </a>
    )
  }

  return (
    <a className={className} href={url} style={style}>
      <span className="label">{label}</span>
    </a>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
}

Button.defaultProps = {
  label: ``,
  url: ``,
}

export default Button
