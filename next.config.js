const withCSS = require('@zeit/next-css')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = withCSS({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    })

    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: ['javascript'],
        filename: 'static/[name].worker.js',
      })
    )

    return config
  },
  async redirects() {
    return [
      {
        source: '/courses/:slug/1',
        destination: '/courses/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
})