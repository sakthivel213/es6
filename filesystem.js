import url from "url";
import fs from "fs";
import http from "http";
http.createServer((req,res)=>{
    let weblink=url.parse(req.url,true);
    let filepath="."+weblink.pathname;
    console.log(filepath);
    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'html'})
            res.write("404 page not found");
            res.end('thank u');
        }
        res.writeHead(200,{'content-type':'html'});
        res.write(data);
        style="text-align:center">res.end('thanku');

    });
}).listen(3000,()=>{
    console.log("your code is working in port 3000");
})