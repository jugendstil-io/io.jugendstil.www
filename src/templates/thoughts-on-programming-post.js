import React from "react"
import moment from "moment"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

import "./thoughts-on-programming-post.scss"
import URL from "../url"

const ThoughtsOnProgrammingPost = ({ data, pageContext }) => {
  const image = data.allFile.edges.map(it => it.node).pop()
  const thought = Object.assign(
    {},
    {
      ...pageContext.thought,
      image: {
        sizes: image.childImageSharp.fluid.sizes,
        src: image.childImageSharp.fluid.src,
        srcSet: image.childImageSharp.fluid.srcSet,
      },
    }
  )

  return (
    <Layout>
      <Metadata
        title={`Thought by ${thought.author}: ${thought.quote}`}
        description={thought.description}
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
                <em>{moment(thought.createdAt).format("MMMM DD, YYYY")}</em>
              </li>
            </ul>
            <p>{thought.description}</p>
            <img
              style={{
                width: `100%`,
                marginBottom: `3rem`,
              }}
              alt={thought.quote}
              src={thought.image.src}
              srcSet={thought.image.srcSet}
              sizes={thought.image.sizes}
            />
          </div>
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
