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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('build', ['clean', 'copy']);

	grunt.registerTask('default', ['build']);
};