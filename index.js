require('dotenv').config()
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const Note = require('./models/note')

const app = express();
app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.get("/", (request, response) => {
  response.send("<h1>Notes Backend!</h1>");
});

app.get("/api/notes", (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
});
app.get("/api/notes/:id", (req,res) => {
    Note.findById(req.params.id)
        .then(note => {
            if (note){
                res.json(note)
            }else{
                res.status(404).end()
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).send({error: 'malformatted id'})
        })
})

app.post("/api/notes/", (req,res) => {
    const body = req.body
    if(!body.content){
        return res.status(400).json({error: "note content missing"})
    }
    if(notes.some(note => note.content === body.content)){
        return res.status(400).json({error:"this note already exists"})
    }
    const newNote = ({
        content: body.content,
        important: body.important || false,
    })

    newNote.save().then(savedNote => {
        res.json(savedNote)
    }).catch(error => console.error(error))
})
app.delete("/api/notes/:id", (req,res) => {
    Note.findById(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => res.status(400).send({error: 'malformatted id'}))
})

const unknownEndpoint = (req,res) => {
    res.status(404).send({error: "unknown endpoint"})
}
app.use(unknownEndpoint)

const PORT =  process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
