const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}
