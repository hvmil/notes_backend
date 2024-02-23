require('dotenv').config()
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const password = process.env.PASSWORD
const url = `mongodb+srv://dimapanathamil:${password}@cluster0.9g7qg0i.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const app = express();
app.use(cors())
app.use(express.static('dist'))
app.use(express.json())


let notes = [
  {
    id: 1,
    content: "HTML is easy bitch",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

const generateId = () => {
    let randomId = ''
    for(let i = 0; i < 10; i++){
        randomId += Math.floor(Math.random() * 10)
    }
    return randomId
}

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
});
app.get("/api/notes/:id", (req,res) => {
    const id = Number(req.params.id)
    if(!notes.some(note => note.id === id)){
        res.status(404).send({error: "does not exist"})
    }
    const note = notes.find(note => note.id === id)
    res.json(note)
})

app.post("/api/notes/", (req,res) => {
    const body = req.body
    if(!body.content){
        return res.status(400).json({error: "note content missing"})
    }
    if(notes.some(note => note.content === body.content)){
        return res.status(400).json({error:"this note already exists"})
    }
    const newNote = {
        id: generateId(),
        content: body.content,
        important: Math.random() < 0.5
    }
    notes = notes.concat(newNote)
    res.json(newNote)
})
app.delete("/api/notes/:id", (req,res) => {
    const id = req.params.id
    const initialLength = notes.length
    notes = notes.filter(note => note.id !== id)

    if(notes.length < initialLength){
        res.status(204).end()
    }else{
        res.status(404).send({error:"note not found"})
    }
})

const unknownEndpoint = (req,res) => {
    res.status(404).send({error: "unknown endpoint"})
}
app.use(unknownEndpoint)

const PORT =  process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
