define([ 'backbone', 'deepmodel', 'messageResourceBundle', 'CommonValidations','envconfig'], function( Backbone, DeepModel, MessageResourceBundle, CommonValidations,EnvConfig) {

    "use strict";
    
 // Get the AMS Root URL from EnvConfig
	var ams_root_url = EnvConfig.ams_root_url;
	var addAddresssesURL;

    var accountId;

    var _model = Backbone.DeepModel.extend({
        
        addressId:'1234', 
        idAttribute: 'addressId',
        addressInfo:{
            addressLine1:'line1', 
            addressLine2:'line2'            
        },
        
        url: function() {
        	addAddresssesURL = ams_root_url+'v1/customeraccounts/'+this.accountId+'/address/';
		 	return addAddresssesURL;
  		},
        //function implemented as per inputs from Quest team
        //need to re-visit and understand/delete the unwanted code
        _validate: function (attrs, options) {         

            if ((options && options.silent) || !this.validate) {
                return true;
            }
            
            //commented as code duplicate for validateAll option.
            //Same thing is being done in backbone.validation validate()
            /*if (!options || (options && options.validateAll)) {
                attrs = _.extend({}, this.attributes, attrs);
            }*/
            
            var error = this.validate(attrs, options);
            if (!error) {
                return true;
            }
            if (options && options.error) {
                options.error(this, error, options);
            } else {
                this.trigger('error', this, error, options);
            }

            return false;
        },
        
        //TODO: externalize all messages in a ResourceBundle
        validation: {
            'addressInfo.addressLine1': {
              required: true,
              minLength: 2,
              msg: MessageResourceBundle.addressLine_validation_errMsg
            },
            'addressInfo.city': {
              required: true,
              pattern: /^[a-zA-Z'.\-\s]+$/,
              msg: MessageResourceBundle.city_validation_errMsg
            },
            'addressInfo.state': 'validateState',
            'addressInfo.postalCode': 'validatePostalCode',
            
            'addressInfo.country': {
                required: true,
                minLength: 2,
                msg: MessageResourceBundle.country_validation_errMsg
            }
        },
        
        validatePostalCode: function(value, attr, computedState) {
	       if(value === null || value === undefined || value === "") {
	    	   return  MessageResourceBundle.zip_validation_errMsg;
	       }
	       value = value.replace(/ /g,'');
	       
	       //for US 
	       if(this.get("addressInfo.country") === "US") {
	    	   var regEx = new RegExp("^([a-zA-Z0-9]{5})(?:[-\s]*([a-zA-Z0-9]{4}))?$");		
	    	   
	    	   if(value.length < 5 || !regEx.test(value)) {
	    		   return  MessageResourceBundle.zip_validation_errMsg;
	    	   }
	       //for Canada alphanumeric with a space
	       }else if(this.get("addressInfo.country") === "CA") {
	    	   var regEx = new RegExp("^[a-zA-Z0-9 ]+$");
	    	   if(value.length < 6 || !regEx.test(value)) {
	    		   return  MessageResourceBundle.zip_validation_errMsg;
	    	   }
	       }
        },
        
        validateState: function(value, attr, computedState){
        	var selectedCountry = this.get("addressInfo.country");
        	return CommonValidations.validateState(value, attr, computedState, selectedCountry);
        } ,
        
        addNewBillingAddress: function (caller) {
    		var map = {};
		    var options = {
		    		success: function(model, resp, xhr) {	
			    		map["SUCCESS"] = model;
			    		caller.processAddNewBillingAddressAPIResponse(map);

		    		},
		    		
		    		fail: function(model, resp, xhr) {
			    		//logger.error("FAILED ADDING ADDRESS REQUEST");
		    		},
		            //TODO: 201 is going to error block.Need to revist this code.
		    		error: function(model, resp, xhr) {	
				        map["SUCCESS"] = model;		
				        //TODO: call a different method for error callback	    		
				        caller.processAddNewBillingAddressAPIResponse(map);		       
		    		}
		    };	    
		    return Backbone.sync('create', this, options);	
    	}
        
    });

    return _model;

});