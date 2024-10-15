module.exports = {
  outputDir: '../docs', // リポジトリのルートに出力
  publicPath: process.env.NODE_ENV === 'production'
    ? '/aipriCompleateCheck/'
    : '/',
  pages: {
    index: {
      entry: "src/main.js",
      title: "アイプリコンプチェック"
    }
  }
}