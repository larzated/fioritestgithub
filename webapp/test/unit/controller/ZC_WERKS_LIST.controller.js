/*global QUnit*/

sap.ui.define([
	"plantlistmodule/controller/ZC_WERKS_LIST.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ZC_WERKS_LIST Controller");

	QUnit.test("I should test the ZC_WERKS_LIST controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
