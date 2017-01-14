(function (phantom, console) {
  "use strict";
  var page = require('webpage').create(),
      system = require('system'),
      t, address;

  if (system.args.length === 1) {
      console.log('Usage: verify.js <URL>');
      phantom.exit(1);
  } else {
      t = Date.now();
      address = system.args[1];
      page.open(address, function (status) {
          if (status !== 'success') {
              console.log('FAIL: Cannot load' + address) ;
              phantom.exit(42);
          } else {
              t = Date.now() - t;
              console.log('Page title is ' + page.evaluate(function () {
                  return document.title;
              }));
              console.log('Loading time ' + t + ' msec');
          }
          phantom.exit();
      });
  }
})(phantom, window.console);
