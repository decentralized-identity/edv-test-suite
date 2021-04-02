module.exports = {
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Edv Interoperability',
        // logoImgPath: './logo.png',
        publicPath: '../../docs',
        filename: 'index.html',
        expand: true,
      },
    ],
  ],
};
