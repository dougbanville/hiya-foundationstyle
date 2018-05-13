/* eslint-env node */
var fs          = require('fs');
var path        = require('path');
var VersionChecker = require('ember-cli-version-checker');
module.exports = {
  description: '',

  beforeInstall: function () {
    return this.addPackageToProject('foundation-sites', "^6.4.3");
  },

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

   afterInstall(options) {
     // Perform extra work here.
     var stylePath = path.join(process.cwd(), 'app', 'styles');
     var foundationPath = path.resolve(require.resolve('foundation-sites'), '../../../scss/');
     var settingsPath = path.join(foundationPath, 'settings', '_settings.scss');
     var settingsFile = fs.readFileSync(settingsPath);
     var settingsFilePath = path.join(stylePath, '_settings.scss');

     fs.writeFileSync(settingsFilePath, settingsFile);

     return this.addPackagesToProject([
      { name: 'ember-cli-sass', target: '^6.0.0' },
      { name: 'broccoli-clean-css', target: '~1.1.0' }
    ]);
   }
};
