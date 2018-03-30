
var express = require('express')
var fs = require('fs')
var path = require('path')

var app = express()

app.listen(3000, function () {
  console.log('Server started')
});

app.use(express.static(path.join(__dirname,'static')))

app.use('/', express.static(path.join(__dirname +'/views')))




