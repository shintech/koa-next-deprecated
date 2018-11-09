const hostname = process.env['HOSTNAME'] || 'localhost:8000'

module.exports = (phase, { defaultConfig }) => {
  return {
    serverRuntimeConfig: {
      hostname
    },

    publicRuntimeConfig: {
      hostname
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      // config.module.rules.push({
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   exclude: [/node_modules/, '/.next'],
      //   loader: 'eslint-loader',
      //   options: {
      //     emitError: false,
      //     emitWarning: true,
      //     failOnWarning: false
      //   }
      // })

      return config
    }
  }
}
