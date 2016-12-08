

var express = require('express')

var app = express()

app.get('/rest', function(req, res) {
  res.json({rest: "Most basic rest api"})
})

app.listen(3000)



//imported the Express module
//Initialized the Express object
//Added a handler for GET /rest which responds to the request with a JSON object
//Told express to listen to HTTP requests on port 3000





