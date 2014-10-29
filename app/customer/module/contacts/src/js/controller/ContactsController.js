define([
    'backbone',
    'module/contacts/src/js/view/ContactsView',
    'module/contacts/src/js/model/Contacts',
    'jquery',
], function(Backbone, ContactsView,ContactModel, $) {
    "use strict";

    
    var ContactsController = Backbone.View.extend({

        model: {},

        initialize: function() {
                this.view = new ContactsView({ template: this.options.viewTemplate, el:this.$el });
        },

        bindEvents: function() {
        },

        show: function() {
            this.view.model = this.model;
            this.view.render();
            
            $('#listaddress').click(function(){
                    //window.location.hash = "#addresslist";
                    Backbone.history.navigate("addresslist", true);
            }); 

        }
        
    });

    return ContactsController;
});
