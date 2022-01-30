import React from "react"
import { kebabCase } from "lodash"

import "./index.scss"

export const ContactCard = contact => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={contact.email}>
    <div className="box-row">
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">{contact.address.city}</h3>
          </div>
          <p className="card-description">
            <span>{contact.email}</span>
            <address>
              {contact.address.line01}
              <br />
              {contact.address.zipCode}, {contact.address.city}
            </address>
          </p>
        </div>
        <div
          className={`card-map map-${contact.address.city
            .toLowerCase()
            .replace(/ /g, "-")}`}
        />
      </div>
    </div>
  </div>
)

export const ServiceCard = ({ enumeration, teaser, title, url }) => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={kebabCase(title)}>
    <div className="box-row">
      <div className="card">
        {enumeration && (
          <div className="card-enumeration">
            <span className="font-black">{enumeration}</span>
          </div>
        )}
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">{title}</h3>
            {url && (
              <div className="card-arrow">
                <a href={url}>&#8674;</a>
              </div>
            )}
          </div>
          <p className="card-description">{teaser}</p>
        </div>
      </div>
    </div>
  </div>
)

export const TechnologyCard = ({ title, src }) => (
  <i className="technology-card" key={src} title={title}>
    <div
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  </i>
)
