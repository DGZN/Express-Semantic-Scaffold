module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: './public/dist/'
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
