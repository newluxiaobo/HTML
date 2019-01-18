const Express = require("express");
const Path = require("path");
const BodyParser = require("body-parser")
const Multer = require("multer")

const app = Express()

app.use(Express.static(Path.join(__dirname,"public")))
app.use(Express.static(Path.join(__dirname,"images")))

app.use(BodyParser.urlencoded({extended:false}))