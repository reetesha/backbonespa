define([ 
  'jquery', 
  'backbone',
], function($, Backbone) {
  "use strict";

  var AddressesView = Backbone.View.extend({

    tagName : "div",

    // template: _.template(addressesTemplate),

    initialize : function() {
      
      if (this.options.template) {
        this.template = this.options.template;
      }
    },

    events : {
    // 'click #addresstotag,.collapse-g,.expand-g' : 'showHideAddresses'
    },

    render : function() {
      this.model={
          "addresses": [
            {
              "addressId": "EF2A45F749F4286DE0437154910A4064",
              "addressNumber": "1688472",
              "addressInfo": {
                "addressLine1": "CAMPS400",
                "addressLine2": "Intuit Inc",
                "city": "Menlo Park",
                "state": "CA",
                "postalCode": "94045",
                "country": "US",
                "geoCode": null
              },
              "primary": true
            }
          ]
        };
      $('.customer').hide();
      this.template = _.template(this.template);
      $(this.el).html( this.template({addresses : this.model.addresses, addressesCount : 20}) );
      //this.$el.html(this.template);
    }

  });

  return AddressesView;
});