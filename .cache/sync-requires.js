const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/gauravgaur/1My/study/projects/gaur4vgaur.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/gauravgaur/1My/study/projects/gaur4vgaur.github.io/src/pages/404.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/home/gauravgaur/1My/study/projects/gaur4vgaur.github.io/src/templates/index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/home/gauravgaur/1My/study/projects/gaur4vgaur.github.io/src/templates/post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/gauravgaur/1My/study/projects/gaur4vgaur.github.io/src/templates/tags.js")))
}

