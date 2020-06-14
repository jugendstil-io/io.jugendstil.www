import React from "react"

import Hero from "../components/Hero"
import { ServiceCard } from "../components/Card"
import Metadata from "../components/metadata"
import services from "../data/services.json"
import pkg from "../../package.json"

import URL from "../url"
import Header from "../components/header"
import Footer from "../components/Footer"

const IndexPage = () => (
  <React.Fragment>
    <Metadata title="Create Business Impact" description={pkg.description} />
    <Header />
    <Hero
      action={{
        label: "Contact",
        url: URL.CONTACT,
      }}
      content={{
        title: "About us",
        description: [
          "Jugendstil_IO helps businesses master the digital reinvention of the industry when they use advanced digital technologies to transform core operations and unlock new revenue streams and business models. We support every aspect of our clients' multi-phase transformation,including workforce, customer experience, Research and development, engineering, business support, and ecosystems.",
        ],
      }}
      teaser="We empower organisations to create business impact and seamless digital experiences through technology."
      title="#CREATINGIMPACT"
    />
    <main>
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
    </main>
    <Footer />
  </React.Fragment>
)

export default IndexPage
