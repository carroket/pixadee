module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			build: {
				src: "build"
			}
		},

		copy: {
			build: {
				files: [
					{
						expand: true,
						cwd: 'source/',
						src: ['pixadee.js'],
						dest: 'build/'
					}
				]
			}
		},

		uglify: {
			build: {
				files: {
					'build/pixadee.min.js': ['source/pixadee.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['clean', 'copy', 'uglify']);

	grunt.registerTask('default', ['build']);
};