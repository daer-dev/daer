const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        scss:       path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}

// Comment originally meant to be in "package.json", but placed here as JSON files don't admit comments:
//   * We delete the cache of "gh-pages" to avoid the following issue:
//       https://github.com/tschaub/gh-pages/issues/27#issuecomment-273337811
