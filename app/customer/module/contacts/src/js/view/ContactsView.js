define([
    'jquery',
    'backbone',
], function($, Backbone ) {
    "use strict";

    var ContactsView = Backbone.View.extend({

        tagName: "div",

        //template: _.template(contactsTemplate),

        initialize: function() {
            if (this.options.template) {
              this.template =  this.options.template;
            }
        },
        events: { 
        	 'click .listaddress' : 'listAddress'

        },
        
        listAddress: function() {
             //this.$el.html(this.template);
            } ,
        
        render: function() {
            $("#listcustomer").click(function(){
                $('#address').hide();
                $('#customer').show();
                $('#selectspa').text('Customer list');
            });

        $("#listaddress").click(function(){
                $('#customer').hide();
                $('#address').show();
                $('#selectspa').text('Address list');
            });

             this.$el.html(this.template);
            }
    });

    return ContactsView;
});