define([ 
	'backbone', 
	'module/addresses/src/js/view/AddressesView', 
	'jquery'
],function(Backbone, AddressesView, $) {
			"use strict";

			var AddressesController = Backbone.View.extend({

				model : {},

				initialize : function() {
					this.view = new AddressesView({
						template : this.options.viewTemplate,
						el : this.$el
					});

				},

				bindEvents : function() {

				},
				show : function() {
					this.view.model = this.model;
					this.view.render();
				}
			});

			return AddressesController;
		});