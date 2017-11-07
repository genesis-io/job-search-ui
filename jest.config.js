module.exports = {
  browser: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**',
    '!**/config/**',
    '!**express.js**',
    '!**express.js**',
    '!**postcss.config.js**',
    '!**jest.config.js**',
    '!**webpack.config.js**',
    '!**/client/static/bundle.js**',
  ],
  notify: true,
};
