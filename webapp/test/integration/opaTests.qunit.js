/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["plantlistmodule/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
