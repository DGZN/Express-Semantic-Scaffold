module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: './public/js/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            }
        ]
    },
    externals: {
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
