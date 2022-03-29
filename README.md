# nuxt-health

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a4630ceba1354de1a5063938da13672b)](https://www.codacy.com/gh/LuxChanLu/nuxt-health/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=LuxChanLu/nuxt-health&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/c0c41af5490678cc8196/maintainability)](https://codeclimate.com/github/LuxChanLu/nuxt-health/maintainability)
[![Downloads](https://img.shields.io/npm/dm/nuxt-health.svg)](https://www.npmjs.com/package/nuxt-health)

## How to use it

In your `nuxt.config.js`
```js
module.exports = {
  modules: [
    'nuxt-health'
  ],
  health: {
    /** @type {String?} Path of health check. */
    path: '/.well-known/nuxt/server-health',
    /** @type {Boolean?} Enable server check. */
    server: true,
    /** @type {Boolean?} Enable client check. */
    client: true,
    /** @type {Function?} Add custom check to the health */
    async custom(options) { }
  }
}
```
