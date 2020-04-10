var googleIdentityProvider = {

    autoLogin: (connectedCallback) => {
        var provider = "googleidentity"
        //check if the user has previously authorized. This does not provider the user information parameter so it looks in the cache
        //for a previous authorization using this provider

        $pinc.oauth.authorized(provider, null, function (authorized) {
            if (authorized) {
                var url = $pinc.getPathfixUrl(provider, pfxClientId, null);
                url.searchParams.set("oauthId", $pinc.oauth.getOauthId(provider).id);
                //leave the {{idtoken}} as it is. It will be replaced by pathfix if the user has already authorized.
                var payload = {
                    "url": "https://oauth2.googleapis.com/tokeninfo?id_token={{id_token}}",
                    "method": "GET",
                    "payload": {}
                }
                $.post(url, JSON.stringify(payload)).always(_providerConnected);

            }
            else {
                //do not authorized action
            }
        })

        function _providerConnected(response) {
            var rows = (response.rows || [])[0];
            console.log(rows.data);
            if (rows.pincStatus != "error" && rows.data.email != null) {
                var googleReturnedData = rows.data;
                googleReturnedData.provider = provider;
                connectedCallback(rows.data)
            }
        }


    }


}