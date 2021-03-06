sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";
	return Controller.extend("com.so.controller.ProductDetails", {
		onInit: function() {
			var oRouter =
				sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("productDetails").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function(oEvent) {
			this.getView().bindElement({
				path: "/ProductSet('" +
					oEvent.getParameter("arguments").productId + "')"
			});
		},
		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter =
					sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("object", true);
			}
		}
	});
});