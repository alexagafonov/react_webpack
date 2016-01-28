module.exports = {
    entry: './js/index.jsx',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.jsx$/,
            loader: 'jsx-loader'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
