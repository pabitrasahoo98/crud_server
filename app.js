const express=require("express");
const app = express()
const cors= require("cors")
const bodyParser=require("body-parser")

const errorMiddleware=require("./middleware/error")
app.use(cors(
  {
      origin:['http://localhost:3000','https://crud-app-three-phi.vercel.app'],
      methods:["GET","POST","PUT","DELETE"],
      credentials:true,
  }
));

app.use(express.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))

const user=require("./routes/userRoutes")
app.use("/api/v1",user);


app.get("/", (req, res) => {
    res.send("Server is working");
  });

//middleware for error
app.use(errorMiddleware);

module.exports=app