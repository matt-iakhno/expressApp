/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    // verbose: true,
    reporters: [
      'default',
      ['jest-ctrf-json-reporter', {}],
      // '<rootDir>/test/jest-reporter.js'
    ],
  };
};