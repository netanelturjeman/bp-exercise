module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('test', 'run unit tests', function () {
    var done = this.async();
    require('child_process').exec('mocha --recursive ./test/unit', function (err, stdout) {
      grunt.log.write(stdout);
      done(err);
    });
  });

  grunt.registerTask('integration', 'run integration tests', function () {
    var done = this.async();
    require('child_process').exec('mocha --recursive ./test/integration', function (err, stdout) {
      grunt.log.write(stdout);
      done(err);
    });
  });

};