const path = require('path');

module.exports = [
    {
        mode: 'development',
        entry: path.join(__dirname, 'src/App.tsx'),
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/
                },
                { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
            ]
        },
        resolve: {
            extensions: ['.js', 'jsx', '.ts', '.tsx', 'json']
        }
    }
];
