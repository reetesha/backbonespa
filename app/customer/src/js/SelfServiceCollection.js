//
//  Collection of JSON response from API
//
define([ 'backbone', 'labelResourceBundle' ], function( Backbone, LabelResourceBundle ) {

    "use strict";

    var _collection = Backbone.Collection.extend({
    	
    	//parse called after collection.fetch returns a response
        parse: function(response){
            this.setModel(response);
            return this.model;
        },

        setModel: function(response) {
            this.model = new Backbone.Model();
            
            //If there is ANY EBPI REFACTORING: use the logic below to create the model with the same attributes
            //with no impact on the rest of the code.
           /* var accountDetailsSourceArray = response.accountDetails;
            var accountDetailsTargetArray = accountDetailsSourceArray;
            for(var i=0; i<accountDetailsSourceArray.length; i++) {
                accountDetailsTargetArray[i].accountInfoDetail = accountDetailsSourceArray[i].accountInfoDetail;
            }
            this.model.set(LabelResourceBundle.accountsObject, accountDetailsTargetArray);
            */
            if(response && response !== null)
            	this.model.set(LabelResourceBundle.accountsObject, response.accountDetails);
        }

    });

    return _collection;

});