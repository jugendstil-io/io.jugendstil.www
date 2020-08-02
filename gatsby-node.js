/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const jobs = require("./src/data/jobs.json")
const thoughtsOnProgramming = require("./src/data/thoughts-on-programming.json")

const template = {
  jobs: path.resolve(`src/templates/job-posting.js`),
  thoughtsOnProgramming: path.resolve(
    `src/templates/thoughts-on-programming-post.js`
  ),
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  jobs
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .forEach(job => {
      const path = `/jobs/${job.id}/`

      createPage({
        path,
        component: template.jobs,
        context: {
          name: job.id,
          current: {
            path,
            job,
          },
        },
      })
    })

  thoughtsOnProgramming
    .filter(it => it.published)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((thought, index, thoughts) => {
      const path = `/thoughts-on-programming/${thought.id}/`

      const next = thoughts[index - 1]
        ? {
            path: `/thoughts-on-programming/${thoughts[index - 1].id}/`,
            thought: thoughts[index - 1],
          }
        : undefined

      const prev = thoughts[index + 1]
        ? {
            path: `/thoughts-on-programming/${thoughts[index + 1].id}/`,
            thought: thoughts[index + 1],
          }
        : undefined

      createPage({
        path,
        component: template.thoughtsOnProgramming,
        context: {
          name: thought.id,
          current: {
            path,
            thought,
          },
          next,
          prev,
        },
      })
    })
}
