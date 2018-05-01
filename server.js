/**
 * Created by Naman on 18/03/18.
 */

const express = require('express');
var path = require("path");
const app = express();

express.static.mime.define({'application/javascript': ['js']});

app.use( '/dist', express.static( __dirname + '/dist' ));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));