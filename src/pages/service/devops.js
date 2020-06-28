import React from "react"

import Hero from "../../components/Hero"
import Layout from "../../components/layout"
import { ServiceCard } from "../../components/Card"
import Metadata from "../../components/metadata"
import services from "../../data/services.json"

import URL from "../../url"

const service = services.find(it => it.url === URL.SERVICE.DEVOPS)

const DevOpsPage = () => {
  return (
    <Layout>
      <Metadata title={service.title} description={service.teaser} />
      <Hero
        action={{
          label: "Contact",
          url: URL.CONTACT,
        }}
        content={{
          title: "DevOps as a Service",
          description: [
            "Expedite your organisation's journey towards automated processes for continuous delivery, ongoing innovation, enhanced security and reduced deployment risk.",
            "DevOps as a Service by Jugendstil_IO helps businesses link their development and operations teams throughout the adoption of cloud-native technologies that automate and streamline their workloads.",
            "The outcome is a fast, flexible and secure organisation which can quickly adapt to the challenges of evolving markets by leveraging efficient and continuous delivery, reduced complexity and reusable workloads.",
          ],
        }}
        title="DevOps Consulting"
        teaser={service.teaser}
      />
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
            <h2 className="section-title">Methodology</h2>
            <p>
              DevOps as a Service by Jugendstil_IO accommodates for all
              organisations regardless of their ability in automated IT
              operations.
            </p>
            <p>
              Whether you're just starting your cloud journey, or you're looking
              for bleeding-edge technologies and advanced automation, our full
              spectrum of expertise is here to assist you.
            </p>
          </div>
        </div>
        <div className="row">
          {service.methodology.map((it, i) => (
            <ServiceCard
              enumeration={i + 1}
              teaser={it.teaser}
              title={it.title}
              url={it.url}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default DevOpsPage
