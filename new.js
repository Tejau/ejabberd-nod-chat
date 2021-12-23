const http = require("https");

const options = {
	"method": "GET",
	"hostname": "tinderfinder.p.rapidapi.com",
	"port": null,
	"path": "/recs/core",
	"headers": {
		"x-rapidapi-host": "tinderfinder.p.rapidapi.com",
		"x-rapidapi-key": "0e5847f604mshe8dccc85b97e337p13f51fjsnb61761278e08",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();