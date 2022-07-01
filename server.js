const express = require("express");
const app = express();
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const helpers = require('./utils/helpers');
const path = require("path")
const port = process.env.PORT || 3005


// creating a static path with the help wrapper function __dirname
const staticpath = path.join(__dirname, 'public');
// console.log(staticpath)
app.use(express.static(staticpath))
// routes
app.get("/", (req, res)=>[
    re.send("hello word")
]);

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//creating a server
app.listen(port, ()=>{
    console.log(`server at port ${port}`)
});
