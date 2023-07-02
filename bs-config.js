module.exports = {
  proxy: '127.0.0.1:4000',
  files: '_site/**/*', // Watch all files in the _site directory
  server: {
    baseDir: '_site', // Serve files from the _site directory
  },
};
