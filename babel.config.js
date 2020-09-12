module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.jsx',
            '.android.tsx',
            '.ios.js',
            '.ios.jsx',
            '.ios.tsx',
            '.web.js',
            '.web.jsx',
            '.web.tsx',
          ],
          root: ['./src'],
        },
      ],
    ],
  }
}
