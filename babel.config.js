module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@common': './src/common',
          '@constants': './src/constants',
          '@domains': './src/domains',
          '@helpers': './src/helpers',
          '@navigations': './src/navigations',
          '@recoil': './src/recoil',
          '@screens': './src/screens',
          '@types': './src/types',
        },
      },
    ],
  ],
};
