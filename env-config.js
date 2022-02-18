const debug = process.env.NODE_ENV !== 'production'
const name = 'admin-shop'

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}
