const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  devtool:'#eval-source-map',
  entry:__dirname+'/main.js',
  output:{
    path:__dirname+'/dist',
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loaders:'babel-loader'
      },
      {
        test:/\.vue$/,
        loaders:'vue-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:__dirname+'/index.html'
    })
  ],
  resolve:{
    extensions:['.vue','.js','.json']
  },
  devServer:{
    contentBase:__dirname+'/dist',
    noInfo:true,
    inline:true,
    historyApiFallback:true
  }

}