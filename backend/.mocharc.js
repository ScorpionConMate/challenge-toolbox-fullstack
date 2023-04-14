module.exports = {
	spec: '__tests__/**/*.spec.js',
	recursive: true,
	reporter: 'mochawesome',
	reporterOptions: {
		reportFilename: "[status]_[datetime]-[name]-report",
		timestamp: "longDate",
		parallel: true,
		code: true
	},
	extension: ['js'],
	timeout: 60000,
}
	