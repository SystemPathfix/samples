//logged in user and pathfix client id
var loggedInUser = "john@enduser.com";
var pfxClientId = "<pinc_client_id>";

//helper function to print the request and response
function __sendRequest(url, payload) {
    $("#request").text(JSON.stringify(payload, null, 4));
    $.post(url, JSON.stringify(payload)).always((response) => { $("#response").text(JSON.stringify(response, null, 4)); });

}


function pushSlackMessage() {
    var pfxPayload = {
        "url": "https://slack.com/api/chat.postMessage",
        "method": "POST",
        "payload": {
            "channel": "#general",
            "text": "Integration active"
        }
    }

    var pfxUrl = $pinc.getPathfixUrl("slack");
    pfxUrl.searchParams.set("userId", loggedInUser);
    pfxUrl.searchParams.set("pinc_client_id", pfxClientId);

    __sendRequest(pfxUrl, pfxPayload)
}


function getChannelList() {
    var pfxPayload = {
        "url": "https://slack.com/api/channels.list",
        "method": "GET",
        "payload": {}
    }

    var pfxUrl = $pinc.getPathfixUrl("slack");
    pfxUrl.searchParams.set("userId", loggedInUser);
    pfxUrl.searchParams.set("pinc_client_id", pfxClientId);

    __sendRequest(pfxUrl, pfxPayload)
}