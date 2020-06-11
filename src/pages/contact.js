import React from "react"

import Layout from "../components/layout"
import { ContactCard } from "../components/Card"
import Metadata from "../components/metadata"
import contact from "../data/contact.json"

const telephone = contact.find(it => it.hq === true).telephone

const Contact = () => (
  <Layout>
    <Metadata
      title="Contact"
      description="Get in touch or drop by, we're always open for a chat."
    />
    <section className="grey">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
          <h2>Contact</h2>
          <p>
            <strong>
              Need a tailored solution for your business? Then we should have a
              chat.
            </strong>
          </p>
          <p>
            Not every business problem can be solved through technology – but
            some definitely can. Let's have a chat about your specific
            requirements, and we'll see if we can help to fuel your vision with
            life.
          </p>
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
      <div className="row">{contact.map(ContactCard)}</div>
    </section>
  </Layout>
)

export default Contact
