module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        // `grunt watch`
        watch: {
            sass: {
                files: [
                    'resources/scss/*.scss',
                    'resources/scss/**/*.scss'
                ],
                tasks: ["sass:dev"],
                options: {
                }
            },
            js: {
                files: [
                    'resources/js/*.js'
                ],
                tasks: ["uglify:dev"],
                options: {
                }
            }
        }, // watch

        uglify: {
            // `grunt uglify:dev`
            dev: {
                files: {
                    'js/javascript.min.js': [ 'resources/js/vendor/*.js', 'resources/js/*.js' ]
                },
                options: {
                    beautify: true,
                    mangle: false
                },
            },
            // `grunt uglify:prod`
            prod: {
                files: {
                    'js/javascript.min.js': [ 'resources/js/vendor/*.js', 'resources/js/*.js' ]
                }
            }
        }, // uglify
        sass: {
            // `grunt sass:dev`
            dev: {
                options: { outputStyle: "nested", sourceMap: true },
                files: {
                    "css/style.min.css": "resources/scss/style.scss"
                },
            },
            // `grunt sass:prod`
            prod: {
                options: { outputStyle: "compressed", sourceMap: true },
                files: {
                    "css/style.min.css": "resources/scss/style.scss"
                },
            }
        }, // sass
    });


    grunt.registerTask('default', ['dev', 'watch']);
    grunt.registerTask('prod', ['sass:prod', 'uglify:prod']);
    grunt.registerTask('dev', ['sass:dev', 'uglify:dev']);

    // load these tasks (necessary to allow use of sass, watch, and uglify
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};