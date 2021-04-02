module.exports = {
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Edv Interoperability',
        outputPath: '../../docs/index.html',
      },
    ],
  ],
};
