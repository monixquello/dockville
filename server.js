const express = require('express');
const path = require('path');
const dotenv = require("dotenv").config();
const passport = require('passport');

// importing database setup
const connectdb = require("./config/dbConfig");
connectdb();


const port = process.env.PORT || 3000;

const app = express();

const Signup = require('./models/signModel');
const Stock = require('./models/stockModel');

// importing routes
const landingRoutes = require("./controllers/landingRoutes")
const registerRoutes = require("./controllers/registerRoutes");
const parkdashRoutes = require("./controllers/parkdashRoutes");
const tyreRoutes = require("./controllers/tyreRoutes");
const tyre2Routes = require("./controllers/tyreRoutes");
const employeeRoutes = require("./controllers/signRoutes");
const batteryRoutes = require("./controllers/batteryRoutes"); 
const bodaRoutes = require("./controllers/bodaRoutes");
const dashRoutes = require("./controllers/dashRoutes");
const stockRoutes = require("./controllers/stockRoutes");
const signRoutes = require("./controllers/signRoutes");


const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false
})

// calling configuration to run
app.use(express.urlencoded({extended:false}))
app.use(express.json());


// setting pug as the view engine
app.engine("pug",require("pug").__express);

app.set("view engine","pug");

app.set("views",path.join(__dirname,"views/pug"));

app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

passport.use(Signup.createStrategy())
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());


// setting up directory for specific files
app.use(express.static(path.join(__dirname,"public")));

// using imported routes
app.use("/api", landingRoutes);
app.use("/api", registerRoutes);
app.use("/api", parkdashRoutes)
app.use("/api", tyreRoutes);
app.use("/api", tyre2Routes);
app.use("/api", employeeRoutes);
app.use("/api", batteryRoutes);
app.use("/api", bodaRoutes); 
app.use("/api", dashRoutes);
app.use("/api", stockRoutes);
app.use("/api", signRoutes);






app.listen(port, ()=>console.log(`server is running at http://localhost:${port}`));