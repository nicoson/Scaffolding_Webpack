var webpack = require('webpack');

module.exports = {
	/***********************\
	|	config source map
	\***********************/
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项


	/************************************\
	|	config entrance and output dir
	\************************************/
	entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
	output: {
		path: __dirname + "/public",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},


	/********************\
	|	config loaders
	\********************/
	module: {//在配置文件里添加JSON loader
		rules: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
				//	detail configuration will be move to a separet file .babelrc
				// query: {
				// 	presets: ['es2015','react']
				// }
			},
			{
	            test: /\.less$/,
	            use: [{
	                loader: "style-loader" // creates style nodes from JS strings
	            }, {
	                loader: "css-loader" // translates CSS into CommonJS
	            }, {
	                loader: "less-loader" // compiles Less to CSS
	            }]
	        }
		]
	},



	plugins: [
		new webpack.BannerPlugin("Copyright By Xiaohui Ni.")//在这个数组中new一个就可以了
	],


	/********************\
	|	config server
	\********************/
	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录
		//color: true,//终端中输出结果为彩色
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	} 
}