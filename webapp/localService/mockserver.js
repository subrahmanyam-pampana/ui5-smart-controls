sap.ui.define(["sap/ui/core/util/MockServer"], function (MockServer) {

    return {
        init:function(){
            let oMockServer =  new MockServer({
                rootUri: "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/"
            })

            // configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: 200
			});

            // simulate
			var sPath = sap.ui.require.toUrl("sap/ui/demo/smartControls/localService");
			oMockServer.simulate(sPath + "/metadata.xml", {
				sMockdataBaseUrl: sPath + "/mockdata",
				bGenerateMissingMockData: true
			});

			// start
			oMockServer.start();
        }
    }


});
