var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/components/App.jsx'),
      './src/index.html'
    ],
    output: {
        filename: '/js/app.js',
        path: __dirname + "/dist"
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
      loaders: [{
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]'],
      },{
        test: /\.jsx?$/,
        loaders: ['babel', 'react-hot'], 
        include: path.join(__dirname, 'src')
      },{
        test: /\.scss$/,
        loader: 'style!css!sass'
      },{
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        loader: 'url?limit=10000000'
      },{
        test: /\.png$/,
        loaders: ['file']
      }]
    }
};
