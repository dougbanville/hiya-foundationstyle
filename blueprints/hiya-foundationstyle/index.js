/* eslint-env node */
var fs          = require('fs');
var path        = require('path');
var VersionChecker = require('ember-cli-version-checker');
module.exports = {
  description: '',

  beforeInstall: function () {
    return this.addPackageToProject('foundation-sites', "^6.4.3");
  },

  addPackagesToProject(app) {
    this._super.included.apply(this, arguments);
    this.ui.writeLine('Including external files!');
  },

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }
};
