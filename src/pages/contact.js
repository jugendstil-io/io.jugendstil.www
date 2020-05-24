import React from "react"

import Layout from "../components/layout"
import Metadata from "../components/metadata"
import contact from "../contact.json"

import "./index.scss"

const telephone = contact.find(it => it.hq === true).telephone

const card = contact => (
  <div className="col-lg-4" key={contact.email}>
    <div className="box-row">
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">{contact.address.city}</h3>
          </div>
          <p className="card-description">
            <span className="">{contact.email}</span>
            <address>
              {contact.address.line01}
              <br />
              {contact.address.zipCode}, {contact.address.city}
            </address>
          </p>
        </div>
        <div className={`card-map map-${contact.address.city.toLowerCase()}`} />
      </div>
    </div>
  </div>
)

const Contact = () => (
  <Layout>
    <Metadata
      title="Contact"
      description="Get in touch or drop by, we're always open for a chat."
    />
    <section className="grey" style={{ margin: `5rem auto` }}>
      <div className="row">
        <div className="col-md-12">
          <h2>Contact</h2>
          <p>Get in touch or drop by, we're always open for a chat.</p>
          <p>
            {contact.find(it => it.hq === true).email}
            <br />
            <a href={`tel:${telephone.replace(/ /g, "")}`}>{telephone}</a>
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="row">
        <div className="col-md-12">
          <h2 className="section-title">Locations</h2>
          <p>Where to find us.</p>
        </div>
      </div>
      <div className="row">{contact.map(card)}</div>
    </section>
  </Layout>
)

export default Contact
