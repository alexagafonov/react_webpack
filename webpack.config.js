module.exports = {
    entry: './js/index.jsx',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "jquery": "jQuery"
    },

    module: {
        noParse: ["react", "react-dom", "jquery"],
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
