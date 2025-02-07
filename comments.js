// Create web server

// Load modules
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

// Create web server
http.createServer(function (req, res) {
    // Parse request
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var path = url_parts.pathname;

    // Route to appropriate function
    if (req.method == 'GET' && path == '/comments') {
        getComments(res);
    } else if (req.method == 'POST' && path == '/comments') {
        postComment(req, res);
    } else {
        res.statusCode = 404;
        res.end();
    }
}).listen(8080);

// Function to get comments
function getComments(res) {
    // Read comments file
    fs.readFile('comments.txt', 'utf8', function (err, data) {
        if (err) {
            res.statusCode = 500;
            res.end();
        } else {
            res.statusCode = 200;
            res.end(data);
        }
    });
}

// Function to post comment
function postComment(req, res) {
    // Read post data
    var body = '';
    req.on('data', function (data) {
        body += data;
    });

    // Write comment to file
    req.on('end', function () {
        var comment = qs.parse(body).comment;
        fs.appendFile('comments.txt', comment + '\n', function (err) {
            if (err) {
                res.statusCode = 500;
                res.end();
            } else {
                res.statusCode = 200;
                res.end();
            }
        });
    });
}