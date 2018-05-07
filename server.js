/**
 * Created by Naman on 18/03/18.
 */

const express = require('express');
var path = require("path");
const app = express();

express.static.mime.define({ 'application/javascript': ['js'] });

var port = process.env.PORT || 8080;

app.use('/labs/dist', express.static(__dirname + '/src/labs/dist'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/labs/:name', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/labs/'+ req.params.name +'/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log('Listening on port ' + port + '!'));