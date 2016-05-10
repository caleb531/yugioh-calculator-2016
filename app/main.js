'use strict';

require.config({
  map: {
    '*': {
      'css': 'node_modules/require-css/css'
    }
  },
  paths: {
    'm': 'node_modules/mithril/mithril',
    'FastClick': 'node_modules/fastclick/lib/fastclick'
  }
});

require([
  './yc',
  './app',
  'css!./global.css',
  'css!./button.css',
  'css!./layout.css',
  'css!./theme.css'
], function (YC) {

  // eslint-disable-next-line no-new
  new YC.App({
    element: document.body
  });

});

require(['FastClick'], function (FastClick) {
  FastClick.attach(document.body);
});
