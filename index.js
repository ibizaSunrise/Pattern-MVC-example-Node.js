const express = require("express")
const mongoose = require("mongoose")
const app = express()
const userRouter = require("./routes/userRouter.js")
const homeRouter = require("./routes/homeRouter.js")
const port = process.env.PORT || 3000
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }))
 
app.use("/users", userRouter)
app.use("/", homeRouter)
 
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
})
 
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log(`Server started on port ${port}`)
    })
})