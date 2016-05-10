var express = require('express');
var app = express();
var staticServerConfig = {
	port: 3000
};

app.use(express.static('dist'));

app.listen(staticServerConfig.port, () => {
	console.log(`Production app listening on port ${staticServerConfig.port}`)
});