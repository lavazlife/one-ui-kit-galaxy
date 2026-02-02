module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables-light.css',
          format: 'css/variables',
          filter: function(token) {
            return token.path[0] === 'light' || token.path[0] === 'global';
          },
          options: {
            outputReferences: true
          }
        },
        {
          destination: 'variables-dark.css',
          format: 'css/variables',
          filter: function(token) {
            return token.path[0] === 'dark' || token.path[0] === 'global';
          },
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
};
