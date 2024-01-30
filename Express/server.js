const express = require("express")
const cors = require("cors")
const userRouts = require("./routes/user")
const empRoutes = require("./routes/Employee")

const app = express();

app.use(cors())

app.use("/users", userRouts)
app.use("/employee",empRoutes)

app.listen(7000,()=>{
    console.log("app is running at port 7000")
})