Package.describe({
  name: 'nikogosovd:multiple-uihooks',
  version: '0.1.8',
  summary: 'A simpler API for Blaze _uihooks with multiple layouts and routing support',
  git: 'https://github.com/nikogosovd/meteor-ui-hooks',
  documentation: 'README.md'
});

Package.onUse(function(api, where) {
  api.use([
    'templating@1.1.1',
    'jquery@1.11.3_2'
  ], 'client');

  api.addFiles([
    'lib.js',
  ], 'client');

  api.export('UiHooks', 'client');
});
