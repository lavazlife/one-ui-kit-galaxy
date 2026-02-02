module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'site/',
      files: [{
        destination: 'tokens.dark.css',
        format: 'css/variables',
        filter: function(token) {
          return !token.path.includes('light');
        }
      }]
    }
  }
};
