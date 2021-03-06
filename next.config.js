const debug = process.env.NODE_ENV !== 'production'
const name = 'admin-shop'

module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${name}/` : '',
}
