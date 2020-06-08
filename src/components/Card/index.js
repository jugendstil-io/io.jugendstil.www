import React from "react"

import "./index.scss"

export const ContactCard = contact => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={contact.email}>
    <div className="box-row">
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">
              {contact.address.city}, {contact.address.country}
            </h3>
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
        <div className={`card-map map-${contact.address.city.toLowerCase()}`} />
      </div>
    </div>
  </div>
)

export const ServiceCard = ({ title, url, teaser }) => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="box-row">
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">{title}</h3>
            {url && (
              <div className="card-arrow">
                <a href={url} />
              </div>
            )}
          </div>
          <p className="card-description">{teaser}</p>
        </div>
      </div>
    </div>
  </div>
)
