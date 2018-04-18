var request = require('request')

module.exports = function (context, req) {

    if (req.body) {
        context.res = {
            // status: 200, /* Defaults to 200 */
        };
        var host = req.body.request.host;
        var jobId = req.body.target.repository;
        var tag = req.body.taret.tag;

        var notificationUrl = process.env["NotificationUrl"]

        var msg = {
            text : "Algorithm Dump generated at " + host + "/" + jobId + ":" + tag
        }

        request.post(notificationUrl, {json: msg}, function(error, response, body) {
            context.done();
        });
    }
    else {
        context.done();
    }
    
};