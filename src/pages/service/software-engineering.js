import React from "react"

import Hero from "../../components/Hero"
import Layout from "../../components/layout"
import { ServiceCard } from "../../components/Card"
import Metadata from "../../components/metadata"
import services from "../../services.json"

import URL from "../../url"

const service = services.find(
  it => it.url === URL.SERVICE.ENTERPRISE_SOFTWARE_DEVELOPMENT
)

const SoftwareEngineeringPage = () => (
  <Layout>
    <Metadata title={service.title} description={service.teaser} />
    <Hero
      title={service.title}
      description={service.teaser}
      action={{
        label: "Contact",
        url: URL.CONTACT,
      }}
    />
    <section className="grey z-minus-100">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
          <h2>You dream it; we build it.</h2>
          <p>
            Regardless of the industry, business success in today's disruptive
            landscape of the 21st century is all about amplifying relationships
            and driving growth through disruption and innovation. Bespoke
            software solutions provide you with the means to scale and increase
            your operational effectiveness and to stay ahead of your
            competitors.
          </p>
          <p>
            Leverage our unique expertise to build reliable custom software
            which put you at the front of the pack and force your competition to
            play catch-up.
          </p>
        </div>
      </div>
    </section>
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
  </Layout>
)

export default SoftwareEngineeringPage
