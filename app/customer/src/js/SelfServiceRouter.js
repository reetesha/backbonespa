define([
    'jquery',
    'backbone',
    'src/js/SelfServiceApplication'
], function($, Backbone, SelfServiceApplication) {

    "use strict";

    
    /**
     * The SelfServiceRouter is akin to a java UrlMapping.  This simply maps routes (urls) to an appropriate call to the SelfServiceApplication object.
     * @type {*}
     */
    

    var SelfServiceRouter = Backbone.Router.extend({
  
        initialize: function(application) {
            //Simple function to automatically log routes that were triggered by filtering route
            this.SelfServiceApplication = application;
			 this.bind("route", function(route, args) {
                                console.log("Route '" + route + "' triggered.");


			});
        },

        routes: {

            "addresslist": "doAddressList",
            "customerlist" : "doContactList"
        },  
        
        doAddressList: function(){
        	this.SelfServiceApplication.showAddressList();
        },        

        doContactList: function() {
            this.SelfServiceApplication.showContactList();
        }
    });
    return SelfServiceRouter;
});
