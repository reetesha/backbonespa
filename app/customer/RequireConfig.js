require.config({

    paths: {
        //  paths for shared libraries across all modules
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone', // Modified locally
		bootstrap: 'lib/bootstrap-modal.js' // Modified locally
    },
    

    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$'
        }
    }
});
