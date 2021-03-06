import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

import "./thoughts-on-programming-post.scss"
import URL from "../url"

const stripHtml = string => string.replace(/<[^>]*>?/gm, "")

const ThoughtsOnProgrammingPost = ({ data, pageContext }) => {
  const image = data.allFile.edges.map(it => it.node).pop()
  const thought = Object.assign(
    {},
    {
      ...pageContext.current.thought,
      image: {
        sizes: image.childImageSharp.fluid.sizes,
        src: image.childImageSharp.fluid.src,
        srcSet: image.childImageSharp.fluid.srcSet,
      },
    }
  )

  if (!Array.isArray(thought.description)) {
    throw Error(
      `Property "description" of thought ${thought.id} must be of type array.`
    )
  }

  const dateTimeFormat = new Intl.DateTimeFormat(`en`, {
    year: `numeric`,
    month: `long`,
    day: `2-digit`,
  })
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(new Date(thought.createdAt))

  const description = thought.description.map(it => (
    <p dangerouslySetInnerHTML={{ __html: it }} />
  ))

  return (
    <Layout className="thoughts-on-programming-detail-page">
      <Metadata
        title={`Thought by ${thought.author}: ${thought.quote}`}
        description={stripHtml(thought.description.join(" "))}
        image={thought.image.src}
        openGraph={{
          title: `Thought by: ${thought.author}`,
        }}
      />
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
            <h1 className="thought-title">
              <small>
                Thought by:
                <br />
              </small>{" "}
              {thought.author}
            </h1>
            <ul className="breadcrumb">
              <li>
                <a href={URL.THOUGHTS_ON_PROGRAMMING}>
                  Thoughts On Programming
                </a>
              </li>
              <li>
                <em>
                  {month} {day}, {year}
                </em>
              </li>
            </ul>
            {description}
            <figure className="thought">
              <img
                alt={thought.quote}
                src={thought.image.src}
                srcSet={thought.image.srcSet}
                sizes={thought.image.sizes}
              />
              <figcaption>{thought.quote}</figcaption>
            </figure>
          </div>
        </div>
        <div className="row">
          <nav className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
            <ul className="prev-next-navigation">
              {pageContext.prev && (
                <li className="prev">
                  <a rel="prev" href={pageContext.prev.path}>
                    ← Prev
                  </a>
                </li>
              )}
              {pageContext.next && (
                <li className="next">
                  <a rel="next" href={pageContext.next.path}>
                    Next →
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  )
}

export default ThoughtsOnProgrammingPost

export const pageQuery = graphql`
  query ThoughtsOnProgrammingPost($name: String) {
    allFile(
      filter: {
        relativeDirectory: { eq: "thoughts-on-programming" }
        name: { eq: $name }
      }
    ) {
      edges {
        node {
          relativePath
          ext
          name
          childImageSharp {
            fluid {
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
