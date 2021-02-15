const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new BrotliGzipPlugin({
			asset: '[path].br[query]',
			algorithm: 'brotli',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8,
			quality: 11,
		}),
		new BrotliGzipPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
	],
})
