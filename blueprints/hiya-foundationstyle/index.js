/* eslint-env node */
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

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
};
