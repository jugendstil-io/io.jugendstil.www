/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Metadata({ description, lang, meta, title, image, openGraph }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaults = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: (openGraph && openGraph.title) || title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: (openGraph && openGraph.title) || title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  if (image) {
    meta.push({ name: "og:image", content: image })
    meta.push({ name: "twitter:image", content: image })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      meta={defaults.concat(meta)}
    />
  )
}

Metadata.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Metadata.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Metadata
