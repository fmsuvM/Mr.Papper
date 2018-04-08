const path = require('path');

module.exports = [
    {
        entry: path.join(__dirname, 'src/App.js'),
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
        },
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
