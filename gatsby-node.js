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
        component: template,
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
