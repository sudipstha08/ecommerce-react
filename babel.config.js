module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'styled-components',
    'inline-react-svg',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@containers': './src/containers',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
          '@queries': './src/queries',
          '@services': './src/services',
          '@store': './src/store',
          '@public': './public',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@interfaces': './src/interfaces',
          '@src': './src',
        },
        cwd: 'babelrc',
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
    ],
  ],
}
