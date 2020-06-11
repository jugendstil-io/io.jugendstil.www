import React from "react"

import Hero from "../components/Hero"
import Layout from "../components/layout"
import { ServiceCard } from "../components/Card"
import Metadata from "../components/metadata"
import services from "../data/services.json"
import pkg from "../../package.json"

import URL from "../url"

const IndexPage = () => (
  <Layout>
    <Metadata title="Create Business Impact" description={pkg.description} />
    <Hero
      title="#CREATINGIMPACT"
      description="We empower organisations to create business impact and seamless digital experiences through technology."
      action={{
        label: "Contact",
        url: URL.CONTACT,
      }}
    />
    <section className="grey z-minus-100">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
          <h2 id="about-us">About us</h2>
          <p>
            Jugendstil_IO helps businesses master the digital reinvention of the
            industry when they use advanced digital technologies to transform
            core operations and unlock new revenue streams and business models.
            We support every aspect of our clients' multi-phase transformation,
            including workforce, customer experience, Research and development,
            engineering, business support, and ecosystems.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
          <h2 className="section-title" id="services">
            Services
          </h2>
          <p>
            Today's disruptive landscape requires your software to adapt, just
            like your organisation needs to. Not only do you need compatible
            code that performs well with legacy systems, but you also need
            specialised expertise - people with full-stack experience to ferry
            your vision into the future.
          </p>
        </div>
      </div>
      <div className="row">
        {services.filter(it => it.active).map(ServiceCard)}
      </div>
    </section>
  </Layout>
)

export default IndexPage
