/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    // verbose: true,
    reporters: [
      'default',
      ['jest-ctrf-json-reporter', { outputFile: 'test/ctrf-report.json' }]
    ],
  };
};