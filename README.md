# nuxt-healthcheck

Middreware for [Nuxt.js](https://nuxtjs.org/) that provides healthcheck.

## Setup

### Install with yarn:

`yarn add nuxt-healthcheck`

### Install with npm:

`npm install nuxt-healthcheck`

### Add `nuxt-healthcheck` module to nuxt.config.js

```
module.exports = {
  modules: [
    'nuxt-healthcheck',
  ]
}
```

### Add additional options to sitemap section of nuxt.config.js to override defaults

```
healthcheck: {
  path: '/ping',
  contentType: 'application/json',
  healthy: () => {
    return JSON.stringify({ result: 'pong' })
  }
}
```

## Options

### `path`

Default: '/healthcheck'

### `contentType`

Default: 'text/plain'

### `healthy`

Function that returns a response body.

Default: 'OK'

## TODO

- [ ] unit test

## License

The npm is available as open source under the terms of the [MIT License.](https://opensource.org/licenses/MIT)
