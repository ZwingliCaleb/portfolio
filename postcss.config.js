module.exports = {
    plugins: [
      require('autoprefixer'), // Automatically adds vendor prefixes
      require('cssnano')({    // Minifies CSS
        preset: 'default',
      }),
      // Add more plugins as needed
    ]
  }
  