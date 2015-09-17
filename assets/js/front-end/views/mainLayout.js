define( ['front-end/views/beforeForm', 'front-end/views/formLayout', 'front-end/views/afterForm'], function( beforeForm, formLayout, afterForm ) {

	var view = Marionette.LayoutView.extend({
		template: "#nf-tmpl-layout",

		regions: {
			responseMsg: ".nf-response-msg",
			beforeForm: ".nf-before-form",
			formLayout: ".nf-form-layout",
			afterForm: ".nf-after-form"
		},

		initialize: function() {
			this.$el = jQuery( "#nf-form-" + this.model.id + "-cont" );
			this.el = "#nf-form-" + this.model.id + "-cont";

			this.render();
			this.beforeForm.show( new beforeForm( { model: this.model } ) );
			this.formLayout.show( new formLayout( { model: this.model, fieldCollection: this.options.fieldCollection } ) );
			this.afterForm.show( new afterForm( { model: this.model } ) );
		}

	});

	return view;
} );