require('dotenv').config();
const express = require("express")
const cors = require('cors')
const app = express();
const mongoose = require("mongoose")
const db_url = "mongodb+srv://yoyashmeet:"+process.env.PASSWORD+"@cluster0.gpngvfu.mongodb.net/Internships?retryWrites=true&w=majority"
mongoose.connect(url);
app.use(cors());
app.use(express.json());

const internSchema = {
    id: String,
    duration: Number,
    experience: String,
    stipend: String,
    location: String,
    ends_in: Number,
    applicants: Number,
    open_positions: Number,
    date_posted: Date,
    skills: [String],
    about: String,
    requirements: [String],
    responsibilities: [String],
    company: String,
    role: String
}

const Intern = mongoose.model("Internships",internSchema);

app.get("/",async function(req,res){
    await Intern.find({})
    .then((intern)=>{
        res.send(intern);
    })
})

app.get("/:id",async function(req,res){
    const id = req.url.slice(4,req.url.length+1);
    await Intern.findById(id)
    .then((data)=>{
        res.send(data)
    })
})

app.listen(process.env.port || 5000,function(){
    console.log("Server listening on port 5000");
})