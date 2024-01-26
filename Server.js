const http = require("http");

http.createServer(function(req, res) {
    if(req.url==="/movies"){
        res.writeHead(200, { 'Content-Type':"Application/json" });
    res.end(JSON.stringify(["Thor","Khushi","Animal","Salar"]));
    }else if(req.url==="/user"){
        res.writeHead(200, { 'Content-Type':"Application/json" });
    res.end(JSON.stringify([{id:1234, Name:"Khushi", Email:"khushi@gmail.com",Address:"Hyd"}]));
    }else if(req.url==="/Employee"){
        res.writeHead(200, { 'Content-Type':"Application/json" });
    res.end(JSON.stringify([{Emp_id:1234, Emp_Name:"Khushi", Emp_Email:"khushi@gmail.com",Emp_Address:"Hyd",Company:"Google"}]));
    }else{
        res.writeHead(200, { 'Content-Type': "text/html" });
    res.end("Welocome to the Node.js");
    }
    
}).listen(7000);
