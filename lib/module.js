/*
 * nuxt-health
 * Copyright (c) 2022 LuxChan S.A R.L.-S (https://github.com/LuxChanLu/nuxt-health)
 * MIT Licensed
 */

const HealthServerMiddleware = require('./health.js')

const defaults = {
  path: '/.well-known/nuxt/server-health',
  client: true,
  server: true
}

module.exports = function (moduleOptions) {
  const options = {
    ...defaults,
    ...this.options.health,
    ...moduleOptions,
    nuxt: this.nuxt
  }
  this.addServerMiddleware({ path: options.path, handler: HealthServerMiddleware(options) })
}
