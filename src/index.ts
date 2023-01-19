import path from 'path'
import { sum } from './sum'

// create an express app
const express = require("express")
const app = express()
// use the express-static middleware
app.use(express.static(path.resolve(__dirname, "../client/build")))

// define the first route
//app.get("/", function (req, res) {
//  res.send("<h1>Hello World!</h1>")
//})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => {
		console.log("Server is running...")
		console.log(sum(10, 5))
	}
	);