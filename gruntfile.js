module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Sass
        sass: {
            options: {
                //sourceMap: true, // Create source map
                //outputStyle: 'compressed' // Minify output
            },
            dist: {
                files: [
                  {
                      expand: true, // Recursive
                      cwd: "styles/sass", // The startup directory
                      src: ["**/*.scss"], // Source files
                      dest: "styles/css/", // Destination
                      ext: ".css" // File extension 
                  }
                ]
            }
        },

        // Watch
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('dev', ['sass', 'watch']);

};