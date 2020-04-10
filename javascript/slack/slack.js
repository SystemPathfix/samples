
var slack = {
    message: {
        send: function () {
            var pfxPayload = {
                "url": "https://slack.com/api/chat.postMessage",
                "method": "POST",
                "payload": {
                    "channel": "#general",
                    "text": "Integration active"
                }
            }

            __sendRequest("slack", pfxPayload)
        }
    }

    , channels: {
        list: function () {
            var pfxPayload = {
                "url": "https://slack.com/api/channels.list",
                "method": "GET",
                "payload": {}
            }

            __sendRequest("slack", pfxPayload)
        }
    }
}
