import http from 'node:http';
import fs from 'node:fs/promises';

const config = {
    port: 8000
}
let num = 100;

const server = http.createServer(async (req, res) => {
    const { url } = req;

    if (url === '/') {
        const file = await fs.readFile('./index.html', 'utf-8');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
        res.end(file); 
    } 

    else if (url === '/style/main.css') {
        const file = await fs.readFile('./style/main.css', 'utf-8');
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.end(file);
    }
    else if (url === '/client/main.js') { 
        const file = await fs.readFile('./client/main.js', 'utf-8'); 
      
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        res.end(file); 
    } 

    else if (url === '/inc') {
        num +=1;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('ok'); 
    } 
    else if (url === '/dec') {
        num -=1;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(num);
        res.end('ok'); 
    } 
    else if (url === '/display_res') {
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(String(num)); 
    } 

   
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
        res.end('Помилка 404, не знайдено');
    }
});

server.listen(config.port);




process.on('SIGINT', () => {
    console.log('Received SIGINT. Shutting down server...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});

