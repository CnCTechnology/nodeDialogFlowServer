var intentRequestManager={
    process:function(req,res)
    {
        var speech="This is just the test"
        var chatResult={
        speech: speech,
        displayText: speech,        
        source: "apiai-test-webhook-node"
        }
       return chatResult;
    }
}
module.exports = intentRequestManager;