define([
    'backbone',
    'module/contacts/src/js/controller/ContactsController',
    'text!module/contacts/src/template/contacts.html',
    'module/addresses/src/js/controller/AddressesController',
    'text!module/addresses/src/template/addresses.html'

    ], function(Backbone, ContactsController,contactsTemplate
        ,AddressesController,addressTemplate
        ) {

    "use strict";
    var addressesController = null;
    var contactsController = null;
    var SelfServiceController = Backbone.View.extend({

        model: {},

        initialize: function() {
        },

        bindEvents: function() {
            //this.listenTo(Backbone, "showlistAddress", this.showAddressList);
        },
        
       
         
        showContactList: function() {
            this.contactsController = new ContactsController({
                    viewTemplate: contactsTemplate,
                        el: "#customer"
        });
               this.contactsController.show();

        },

        showAddressList: function() {

            this.addressesController = new AddressesController({
                viewTemplate: addressTemplate,
             el: "#address"
            });
            this.addressesController.show();
               

        }

        });
    
    return SelfServiceController;
});