const express = require("express");
const cors = require("cors");
const Routes = require("./src/routes/index");
const {connectDB} = require("./src/config/db.config");
const app = express();
const PORT = 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
   "Access-Control-Allow-Origin": "*",
}));

app.get("/ping", (req, res)=>{
    res.send("Server route running perfectly fine!")
});

app.use("/", Routes);

app.listen(PORT, ()=>{
    console.info(`server running on http:localhost:${PORT}`);
});