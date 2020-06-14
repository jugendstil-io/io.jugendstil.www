import React from "react"

import Hero from "../../components/Hero"
import Layout from "../../components/layout"
import Metadata from "../../components/metadata"
import { ServiceCard } from "../../components/Card"
import services from "../../data/services.json"

import URL from "../../url"

const service = services.find(it => it.url === URL.SERVICE.CUSTOMER_EXPERIENCE)

const CustomerExperiencePage = () => (
  <Layout>
    <Metadata title={service.title} description={service.teaser} />
    <Hero
      action={{
        label: "Contact",
        url: URL.CONTACT,
      }}
      content={{
        title: "Personal and engaging experiences",
        description: [
          "Great products are necessary but not sufficient: In today’s disruptive world, you have to deliver exceptional customer experiences to be successful.",
          "Jugendstil_IO provides expertise and means to help you figure out what matters most to your customers, and equip your team to deliver best-of-class experiences yielding to happy customers, happy employees and happy shareholders.",
        ],
      }}
      title="Customer Experience"
      teaser={service.teaser}
      action={{
        label: "Contact",
        url: URL.CONTACT,
      }}
    />
    <section>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
          <h2 className="section-title">Capabilities</h2>
          <p>
            Our unique customer-centric culture approach delivers a triple play
            of results: happier customers, employees and shareholders.
          </p>
        </div>
      </div>
      <div className="row">{service.capabilities.map(ServiceCard)}</div>
    </section>
  </Layout>
)

export default CustomerExperiencePage
