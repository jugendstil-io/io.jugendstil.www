/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const thoughtsOnProgramming = require("./src/data/thoughts-on-programming.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const template = path.resolve(`src/templates/thoughts-on-programming-post.js`)

  thoughtsOnProgramming
    .filter(it => it.published)
    .forEach(thought => {
      createPage({
        path: `/thoughts-on-programming/${thought.id}/`,
        component: template,
        context: {
          name: thought.id,
          thought,
        },
      })
    })
}
