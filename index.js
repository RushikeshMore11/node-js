const http = require("http")
const port = 5000


const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("Welcome to my URL ..Rushikesh More Here")
        }
    else if(req.url=="/hello?Language=English"){
        res.end("Hello World");
    }    
    else if(req.url=="/hello?Language=Hindi"){
        res.end("Namste Sansaar");
    }    
    else if(req.url=="/hello?Language=French"){
        res.end("Bonjour le monde");
    }    
    else{
        res.end("Invalid Query");
    }   
});
server.listen(port, "127.0.0.1", ()=>{
    console.log("server is running")
})