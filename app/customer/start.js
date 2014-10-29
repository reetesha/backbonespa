/*
 * start.js is the application entrypoint (think "main method").  This is the first and only file that is loaded by the index.html page.
 *
 */
require(['RequireConfig'], 
		function(RequireConfigg) {
		require([
		         'src/js/SelfServiceApplication'
		         ], function(SelfServiceApplication) {
			"use strict";

			//instantiate the Application
			var SelfServiceApplication = new SelfServiceApplication();

			//initialize the application instance
			SelfServiceApplication.init();

	});
});


