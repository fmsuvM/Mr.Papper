const path = require('path');

module.exports = [
    {
        mode: 'development',
        entry: path.join(__dirname, 'src/App.js'),
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        presets: ['react', 'es2015', 'es2017']
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', 'jsx']
        }
    }
];
