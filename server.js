const express=require("express");
const app=express();
require("node:dns/promises").setServers(["1.1.1.1","8.8.8.8"]);
require("dotenv").config();

const db_connect=require("./db_connect");
db_connect();
app.use(express.json());
app.use("/user", require("./routes/user"))
app.use("/product", require("./routes/product"))
app.listen(process.env.PORT, (err)=>err?console.log(err):console.log("server is running"))