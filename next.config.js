const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/page' : '',
  assetPrefix: isProd ? '/page/' : '',
  images: {
    unoptimized: true,
  },
};
