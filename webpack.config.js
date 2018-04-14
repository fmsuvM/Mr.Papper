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
                // {
                //     test: /\.js[x]?$/,
                //     loader: 'babel-loader',
                //     exclude: /node_modules/,
                //     options: {
                //         presets: ['react', 'es2015', 'es2017']
                //     }
                // }
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
        },
        externals: {
            'react-dom': 'ReactDOM',
            'react': 'React'
        }
    }
];
