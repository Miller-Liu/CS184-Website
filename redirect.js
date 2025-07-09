
(function () {
	const path = window.location.pathname;

	const hasExtension = /\.\w+$/; // e.g., .html, .css
	const isFile = hasExtension.test(path);
	const endsWithSlash = path.endsWith('/');

	if (!endsWithSlash && !isFile) {
		window.location.replace(path + '/');
	}
})();
