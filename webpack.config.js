module.exports = {
  entry: ["./js/partTwo/me.jsx"],
  output: {
    filename: "./js/out2.js"
  },
  // entry: ["./js/partOne/app.js", "./js/partOne/typer.jsx"],
  // output: {
  //   filename: "./js/out.js"
  // },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  }
}
