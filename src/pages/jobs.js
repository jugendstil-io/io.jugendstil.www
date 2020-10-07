import Layout from "../components/layout"
import Metadata from "../components/metadata"
import React from "react"

import jobs from "../data/jobs.json"
import "./jobs.scss"
import cover from "../images/cover.jpeg"
import Banner from "../components/Banner"
import URL from "../url"
import contact from "../data/contact.json"

const Job = it => (
  <div className="job" key={it.id}>
    <h3 className={"job-title"}>{it.title}</h3>
    <div className={"job-meta"}>
      {it.employmentType} - {it.seniorityLevel}
    </div>
    <a href={`${URL.JOBS}/${it.id}/`}>Learn more</a>
  </div>
)

const JobsPage = () => (
  <Layout className="jobs-page">
    <Metadata title="Jobs" />
    <section>
      <Banner description={`Jobs at Jugendstil_IO`} src={cover} />
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <h1 className="title">
            Latest Jobs
            <br /> <small>Live to create business impact!</small>
          </h1>
          <p>
            Jugendstil_IO helps businesses master the digital reinvention of the
            industry when they use advanced digital technologies to transform
            core operations and unlock new revenue streams and business models.
            We support every aspect of our clients' multi-phase transformation,
            including workforce, customer experience, Research and development,
            engineering, manufacturing, business support, and ecosystems.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          {jobs.map(Job)}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <h2>Don't see the right fit?</h2>
          <p>
            We are always looking for new associates, so feel free to drop us a
            line at {contact.find(it => it.hq === true).email}.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default JobsPage
