'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  var jsFileList = [
    'static/vendor/essential.js/essential.js',
    'static/vendor/lunr.js/lunr.js',
    'static/js/main.js',
    'static/js/services/*.js',
    'static/js/behaviors/*.js'
  ];

  grunt.initConfig({
    distPath: 'static/build',
    sass: {
      options: {
        sourceMap: false
      },
      dev: {
        files: {
          '<%= distPath %>/css/main.css': 'static/scss/main.scss'
        }
      },
      build: {
        files: {
          '<%= distPath %>/css/main.min.css': 'static/scss/main.scss'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [jsFileList],
        dest: '<%= distPath %>/js/main.js',
      },
    },
    uglify: {
      dist: {
        files: {
          '<%= distPath %>/js/main.min.js': [jsFileList]
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev: {
        options: {
          map: {
            prev: '<%= distPath %>/css/'
          }
        },
        src: '<%= distPath %>/css/main.css'
      },
      build: {
        src: '<%= distPath %>/css/main.min.css'
      }
    },
    grunticon: {
      myIcons: {
        files: [{
          expand: true,
          cwd: 'static/img',
          src: ['*.svg'],
          dest: '<%= distPath %>/css/icons'
        }],
        options: {
          enhanceSVG: true
        }
      }
    },
    watch: {
      sass: {
        files: [
          'static/scss/*.scss',
          'static/scss/**/*.scss'
        ],
        tasks: ['sass:dev', 'newer:autoprefixer:dev'],
        options: {
          spawn: false
        }
      },
      js: {
        files: [
          jsFileList
        ],
        tasks: ['newer:concat'],
        options: {
          spawn: false
        }
      },
      img: {
        files: [
          'static/img/*.svg'
        ],
        tasks: ['grunticon'],
        options: {
          spawn: false
        }
      }
    },
    copy: {
      dist: {
        files: [
          { expand: true, src: ['<%= distPath %>/**'], dest: 'dist/', filter: 'isFile' },
          { src: ['index.html'], dest: 'dist/index.html' },
        ]
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('dev', [
    'grunticon',
    'sass',
    'autoprefixer:dev',
    'concat'
  ]);

  grunt.registerTask('build', [
    'grunticon',
    'sass',
    'autoprefixer:dev',
    'uglify',
    'concat',
    // 'copy'
  ]);
};
