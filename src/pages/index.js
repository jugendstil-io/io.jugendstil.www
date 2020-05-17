import React from "react"

import Hero from "../components/Hero"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import services from "../services.json"
import pkg from "../../package.json"

import "./index.scss"

const card = service => (
  <div className="col-lg-4">
    <div className="box-row">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{service.title}</h3>
          <div className="card-arrow">
            <a href="#"></a>
          </div>
        </div>
        <p className="card-description">{service.teaser}</p>
      </div>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <Metadata
      title="Jugendstil - Create Business Impact"
      description={pkg.description}
    />
    <Hero/>
    <section className="grey">
      <div className="row">
        <div className="col-md-12">
          <h2>About us</h2>
          <p>
            Jugendstil helps businesses master the digital reinvention of the
            industry when they use advanced digital technologies to transform
            core operations and unlock new revenue streams and business models.
            We support every aspect of our clients' multi-phase transformation,
            including workforce, customer experience, Research and development,
            engineering, manufacturing, business support, and ecosystems.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="row">
        <div className="col-md-12">
          <h2 className="section-title">Services</h2>
          <p>
            Delivering intelligent, cost-effective, custom software solutions
            for companies.
          </p>
        </div>
      </div>
      <div className="row">{services.map(card)}</div>
    </section>
  </Layout>
)

export default IndexPage
