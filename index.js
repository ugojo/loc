const express = require('express')
const expressIp = require('express-ip')
const  http = require('http');
const useRouter = require('./router/userRouter')



const app = express()


app.set('port', 3000);
// Create a server object
const server = http.createServer(app)

// Define the port to listen on
const port = 3000;

app.use(express.json())
app.use(expressIp().getIpInfoMiddleware)
app.get('/',(request, response, next) => {
	console.log({'request': request.method});

	next()
 });
 app.use(useRouter)

// Start the server
server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
