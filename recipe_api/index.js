var     express     =   require("express"),
        app         =   express(),
        recipeRoutes = require("./routes/recipe"),
        bodyParser  = require("body-parser");
        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'))  ;       
app.use(express.static(__dirname + '/public'))  ;       

app.get("/", function(req, res){
    res.sendFile("index.html");
});

app.use('/api/recipe', recipeRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("APP IS Running on PORT " + process.env.PORT);
})