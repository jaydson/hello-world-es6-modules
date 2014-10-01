module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['src/vendor/traceur.js', 'src/vendor/es6-module-loader.js'],
				dest: 'dist/bundle.js'
			},
		},


		 uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'dist/bundle.min.js': ['dist/bundle.js']
				}
			}
		},

		copy: {
			main: {
				src: 'src/main.js',
				dest: 'dist/main.js'
			},
			vendor: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['vendor/*.js', 'modules/*.js'],
					dest: 'dist/',
					filter: 'isFile'
				}]
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['concat','copy']);
};