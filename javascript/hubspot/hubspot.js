
var hubspot = {
    contacts: {
        get: function () {

            var pfxPayload = {
                "url": "https://api.hubapi.com/contacts/v1/lists/all/contacts/all",
                "method": "GET",
                "payload": {}
            }

            __sendRequest("hubspot", pfxPayload);
        }
    }
}