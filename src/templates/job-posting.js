import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import cover from "../images/cover.jpeg"
import URL from "../url"

import "./job-posting.scss"
import Banner from "../components/Banner"
import Button from "../components/Button"
import about from "../data/about.json"

const stripHtml = string => string.replace(/<[^>]*>?/gm, "")

const JobPosting = ({ pageContext }) => {
  const job = pageContext.current.job

  return (
    <Layout className="job-posting-page">
      <Metadata
        title={`${job.title} • ${job.location}`}
        description={stripHtml(job.description)}
        image={cover}
        openGraph={{
          title: `${job.title} - ${job.location}`,
        }}
      />
      <section>
        <Banner description={`${job.title} - ${job.location}`} src={cover} />
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
            <h1 className="job-title">
              {job.title}
              <br /> <small>{job.location}</small>
            </h1>
            <Button.Primary
              label="Apply"
              style={{ marginBottom: "2rem" }}
              url={URL.CAREER.CV_DROP}
            />
            <p>{about.description}</p>
            <div
              className="job-description"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
            <div className="job-details">
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Job Id</th>
                    <td>
                      <p dangerouslySetInnerHTML={{ __html: job.id }} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Employment Type</th>
                    <td>
                      <p
                        dangerouslySetInnerHTML={{ __html: job.employmentType }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Seniority Level</th>
                    <td>
                      <p
                        dangerouslySetInnerHTML={{ __html: job.seniorityLevel }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Function</th>
                    <td>
                      <p>{job.function.join(", ")}</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Contact</th>
                    <td>
                      <p dangerouslySetInnerHTML={{ __html: job.contact }} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default JobPosting
