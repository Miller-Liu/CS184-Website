module.exports = {
	content: [
		"./index.html",
		"./**/*.{js,ts,jsx,tsx,html}",
	],
	extend: {
		screens: {
			print: { raw: 'print' },
			screen: { raw: 'screen' },
		},
	},
}