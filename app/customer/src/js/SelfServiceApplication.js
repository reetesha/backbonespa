define([
    'backbone',
    'underscore',
    'src/js/SelfServiceRouter',
    'src/js/SelfServiceController'
], function(Backbone,_, SelfServiceRouter,SelfServiceController) {

    "use strict";

    var SelfServiceApplication = function () { };

    /**
     * Init sets up the application instance and loads the first page.
     */
    SelfServiceApplication.prototype.init = function () {
 		var r = new SelfServiceRouter(this);
        this.router = r;
        /*var _ctrl = this;debugger;*/
        if(!Backbone.history.start( {root:"/tech-friday/app/selfservice"} )){
                    r.navigate("/customerlist", true);
                }
                this.bindEvents();
 	};

    SelfServiceApplication.prototype.bindEvents = function() {
             //this.listenTo(Backbone, "showlistAddress", this.showAddressList);
    }


    /* loads the contactlist view */
    SelfServiceApplication.prototype.showContactList = function() {
                        this.selfServiceController=new SelfServiceController();
                        this.selfServiceController.showContactList();

    };
      
      /* loads the addresslist view */
    SelfServiceApplication.prototype.showAddressList = function() {
                        this.selfServiceController=new SelfServiceController();
                        this.selfServiceController.showAddressList();
    };      
            
   
	
	return SelfServiceApplication;
});