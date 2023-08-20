const express = require('express');
const path = require('path');
const dotenv = require("dotenv").config();

// importing database setup
const connectdb = require("./config/dbConfig");
const port = process.env.PORT || 3000;

const app = express();


// importing routes
const landingRoutes = require("./controllers/landingRoutes")
const registerRoutes = require("./controllers/registerRoutes");
const parkdashRoutes = require("./controllers/parkdashRoutes");
const logRoutes = require("./controllers/logRoutes");
const tyreRoutes = require("./controllers/tyreRoutes");
const tyre2Routes = require("./controllers/tyreRoutes");
const employeeRoutes = require("./controllers/employeeRoutes");
const batteryRoutes = require("./controllers/batteryRoutes"); 
const bodaRoutes = require("./controllers/bodaRoutes");
const dashRoutes = require("./controllers/dashRoutes");



// calling configuration to run
app.use(express.urlencoded({extended:false}))
app.use(express.json());

connectdb();

// setting pug as the view engine
app.engine("pug",require("pug").__express);

app.set("view engine","pug");

app.set("views",path.join(__dirname,"views/pug"));




// setting up directory for specific files
app.use(express.static(path.join(__dirname,"public")));

// using imported routes
app.use("/api", landingRoutes);
app.use("/api", registerRoutes);
app.use("/api", parkdashRoutes)
app.use("/api", logRoutes);
app.use("/api", tyreRoutes);
app.use("/api", tyre2Routes);
app.use("/api", employeeRoutes);
app.use("/api", batteryRoutes);
app.use("/api", bodaRoutes); 
app.use("/api", dashRoutes);






app.listen(port, ()=>console.log(`server is running at http://ocalhost:${port}`));