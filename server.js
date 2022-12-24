const  express=require("express")
const app=express();
const path =require("path")
const multer=require("multer")
app.use("/uploads",express.static('uploads'))
const storage=multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,"uploads")
    },
    filename: (req,file,cb)=>{
    
        cb(null,"@"+Date.now()+ path.extname(file.originalname))
    }
})

const upload=multer({storage:storage})
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.post("/upload",upload.single('photo'),(req,res)=>{
    console.log(req.file)
    res.json({nam:req.file});

})
app.listen(3000,(req,res)=>{
    console.log("TELL ME I AM, LISTINING")

})