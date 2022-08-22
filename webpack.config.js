'use strict'

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'traaittPlatformUtils.js',
    library: 'traaittPlatformUtils',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty'
  },
  target: 'web'
}
