// next.config.js
// ⛔️ これは消す → output: 'export'

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: '', // GitHub Pages のときだけ必要だった設定
  assetPrefix: '', // GitHub Pages 用の設定
  images: {
    unoptimized: true, // Vercel では false（または削除）
  },
}
