module.exports = function () {

    return {
        process:function(req,res)
        {
            var speech="This is just the test"
            var chatResult={
            speech: speech,
            displayText: speech,        
            source: "apiai-test-webhook-node"
            }
            res.json(chatResult);
        }
    }

}