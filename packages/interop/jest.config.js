module.exports = {
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Interop Test Suite',
        // logoImgPath: './logo.png',
        publicPath: '../../docs',
        filename: 'index.html',
        expand: true,
      },
    ],
  ],
};
