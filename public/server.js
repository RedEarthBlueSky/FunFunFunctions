// import loadImagePromised from 'js/loadImagePromised';
const http = require('http');
const fs = require('fs');

function send404Response(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Error 404: Page not found');
  response.end();
}

//  Handle a user request
function onRequest(request, response) {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./index.html').pipe(response);
  } else {
    send404Response(response);
  }
}

http.createServer(onRequest).listen(8888);
console.log('Server is now running...');

/*
let whenCatLoaded =
  loadImagePromised('images/tiny-kitten-in-a-box.jpt');

whenCatLoaded.then((img)) => {
  let imgElement = documente.createElements('img');
  imgElement.src = img.src;
  document.body.appendChild(imgElement)
});
*/
