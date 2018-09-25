module.exports = (env, argv) => ({
	entry: './app/index.jsx',
	output: {
		filename: 'dist/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},
	// resolve: {
	// 	extensions: ['*', '.js', '.jsx'],
	// 	alias: {
	// 		config: argv.mode === 'development' ?
	// 			__dirname + '/src/app/config.dev.js' :
	// 			__dirname + '/src/app/config.prod.js',
	// 	},
	// },
});
