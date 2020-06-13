import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

import thoughtsOnProgramming from "../data/thoughts-on-programming.json"
import "./thoughts-on-programming.scss"
import URL from "../url"

const meta = {
  title: "Thoughts On Programming",
  description:
    "We have compiled a list of quotes which help you start the day with positive vibes! You can follow us on Instagram, Twitter or LinkedIn to get the latest #ThoughtsOnProgramming straight to your inbox.",
}

const Thought = it => (
  <div className="thought" key={it.id}>
    <a href={`${URL.THOUGHTS_ON_PROGRAMMING}/${it.id}/`}>
      <img
        alt={it.quote}
        src={it.image.src}
        srcSet={it.image.srcSet}
        sizes={it.image.sizes}
      />
    </a>
  </div>
)

const ThoughtsOnProgrammingPage = ({ data }) => {
  const files = data.allFile.edges.map(it => it.node)
  const thoughts = thoughtsOnProgramming
    .map(thought => {
      const image = files.find(it => it.name === thought.id)

      return {
        ...thought,
        image: {
          sizes: image.childImageSharp.fluid.sizes,
          src: image.childImageSharp.fluid.src,
          srcSet: image.childImageSharp.fluid.srcSet,
        },
      }
    })
    .filter(it => it.published)
    .sort((a, b) => b.date - a.date)

  return (
    <Layout className="thoughts-on-programming-index-page">
      <Metadata title={meta.title} description={meta.description} />
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
            <h1 className="thought-title">
              <small>
                Thoughts on
                <br />
              </small>{" "}
              Programming
            </h1>
            <p>
              We have compiled a list of quotes which help you start the day
              with positive vibes! You can follow us on{" "}
              <a
                href="https://www.instagram.com/jugendstil_io/"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://twitter.com/jugendstil_io/"
                rel="noreferrer"
                target="_blank"
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/company/jugendstil-io/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              to get the latest <em>#ThoughtsOnProgramming</em> straight to your
              inbox.
            </p>
          </div>
        </div>
        <div className="row">{thoughts.map(Thought)}</div>
      </section>
    </Layout>
  )
}

export default ThoughtsOnProgrammingPage

export const pageQuery = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "thoughts-on-programming" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              sizes
              src
              srcSet
            }
          }
          ext
          name
        }
      }
    }
  }
`
