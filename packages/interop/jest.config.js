module.exports = {
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Edv Interop',
        // logoImgPath: './logo.png',
        publicPath: '../../docs',
        filename: 'index.html',
        expand: true,
      },
    ],
  ],
};
