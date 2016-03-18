module.exports = function( grunt ) {
    'use strict';

    grunt.initConfig({
        appConfig: {
            dev: {
                base: 'dev',
                css: 'dev/css',
                js: 'dev/js'
            },
            dist: {
                base: 'dist',
                css: 'dist/css',
                js: 'dist/js'
            },
            baseCSS: [
                '<%= appConfig.dev.css %>/main.scss'
            ],
            baseJS: [
                '<%= appConfig.dev.js %>/PureJSDialog.js',
                '<%= appConfig.dev.js %>/PureJSDialog.utils.js',
                '<%= appConfig.dev.js %>/PureJSDialog.templates.js',
                '<%= appConfig.dev.js %>/PureJSDialog.factory.js'
            ],
            watchFiles: [
                'Gruntfile.js',
                '<%= appConfig.baseCSS %>',
                '<%= appConfig.baseJS %>',
                '<%= appConfig.dev.base %>/examples.html'
            ]
        }, // appConfig

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            target: [
                'Gruntfile.js',
                '<%= appConfig.baseJS %>'
            ]
        }, // jshint

        uglify: {
            dist: {
                files: {
                    '<%= appConfig.dist.js %>/PureJSDialog.min.js': '<%= appConfig.baseJS %>'
                }
            }
        }, // uglify

        cssmin: {
            dev: {
                files: {
                    '<%= appConfig.dev.css %>/PureJSDialog.css': '<%= appConfig.baseCSS %>'
                }
            },
            dist: {
                files: {
                    '<%= appConfig.dist.css %>/PureJSDialog.min.css': '<%= appConfig.baseCSS %>'
                }
            }
        }, // cssmin

        sass: {
            dev: {
                files: {
                    '<%= appConfig.dist.css %>/PureJSDialog.css': '<%= appConfig.baseCSS %>'
                }
            },
            dist: {
                files: {
                    '<%= appConfig.dist.css %>/PureJSDialog.min.css': '<%= appConfig.baseCSS %>'
                }
            }
        },

        targethtml: {
            dev: {
                files: {
                    '<%= appConfig.dev.base %>/index.html': '<%= appConfig.dev.base %>/examples.html'
                }
            },
            dist: {
                files: {
                    '<%= appConfig.dist.base %>/examples.html': '<%= appConfig.dev.base %>/examples.html'
                }
            }
        }, // targethtml

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    open: 'http://localhost:9000/',
                    base: '<%= appConfig.dev.base %>'
                }
            }
        }, // connect

        watch: {
            dev: {
                files: '<%= appConfig.watchFiles %>',
                tasks: [ 'jshint', 'targethtml:dev' ],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask( 'default', function() {
        grunt.task.run([ 'dev' ]);
    });

    grunt.registerTask( 'dev', function() {
        grunt.task.run([
            'jshint',
            'targethtml:dev',
            'connect',
            'watch:dev'
        ]);
    });

    grunt.registerTask( 'dist', function() {
        grunt.task.run([
            'jshint',
            'targethtml:dist',
            'uglify:dist',
            'cssmin:dist'
        ]);
    });

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-targethtml' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
};
