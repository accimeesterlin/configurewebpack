

module.exports = {

	entry:'./src/index.js',


	output:{
		filename: './public/bundle.js'
	},


	module:{
		loaders:[
			{
				test:/\.jsx?$/, // regular expression
				include:/src/,
				loader:'babel-loader',
				query:{
					presets:['react', 'es2015']
				} // optional

			}
		]
	}
};

// Packages


// Dependencies
// React  
// React-dom


// Dev Dependencies
// babel-core
// babel-preset-react
// babel-preset-es2015
// babel-loader





