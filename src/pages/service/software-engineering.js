import React from "react"
import { sortBy, startCase } from "lodash"

import Hero from "../../components/Hero"
import Layout from "../../components/layout"
import { ServiceCard, TechnologyCard } from "../../components/Card"
import Metadata from "../../components/metadata"
import services from "../../data/services.json"

import URL from "../../url"

const service = services.find(
  it => it.url === URL.SERVICE.ENTERPRISE_SOFTWARE_DEVELOPMENT
)

const SoftwareEngineeringPage = ({ data }) => {
  const technologies = sortBy(
    data.allFile.edges.map(it => {
      return {
        title: `${startCase(it.node.name)} Development`,
        src: it.node.childImageSharp.fluid.src,
      }
    }),
    ["title"]
  )

  return (
    <Layout>
      <Metadata title={service.title} description={service.teaser} />
      <Hero
        action={{
          label: "Contact",
          url: URL.CONTACT,
        }}
        content={{
          title: "You dream it; we build it.",
          description: [
            "Regardless of the industry, business success in today's disruptive landscape of the 21st century is all about amplifying relationships and driving growth through disruption and innovation. Bespoke software solutions provide you with the means to scale and increase your operational effectiveness and to stay ahead of your competitors.",
            "Leverage our unique expertise to build reliable custom software which put you at the front of the pack and force your competition to play catch-up.",
          ],
        }}
        title="Software Engineering"
        teaser={service.teaser}
      />
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
            <h2 className="section-title">Capabilities</h2>
            <p>
              We are delivering intelligent, cost-effective, custom software
              solutions for businesses.
            </p>
          </div>
        </div>
        <div className="row">{service.capabilities.map(ServiceCard)}</div>
      </section>
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
            <h2 className="section-title">Technologies</h2>
            <p>
              To provide you best of services, we use among others the following
              technologies.
            </p>
          </div>
        </div>
        <div className="row">{technologies.map(TechnologyCard)}</div>
      </section>
    </Layout>
  )
}

export default SoftwareEngineeringPage

export const pageQuery = graphql`
  query SoftwareEngineeringPage($name: String) {
    allFile(
      filter: { relativeDirectory: { eq: "technology" }, name: { eq: $name } }
    ) {
      edges {
        node {
          relativePath
          ext
          name
          childImageSharp {
            fluid(maxWidth: 275) {
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
