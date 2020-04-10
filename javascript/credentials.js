var loggedInUser = "john@enduser.com";
var pfxClientId = "<pinc_client_id>";

function __sendRequest(provider, payload) {

    var url = $pinc.getPathfixUrl(provider, pfxClientId);

    //add information needed to complete request
    url.searchParams.set("userId", loggedInUser);
    url.searchParams.set("pinc_client_id", pfxClientId);

    $("#request").text(JSON.stringify(payload, null, 4));
    $.post(url, JSON.stringify(payload)).always(
        (response) => {
            $("#response").text(JSON.stringify(response, null, 4));
        });
}

