var path = require('path');
const fs = require('fs');

const jsonFile = 'routes/../data/db.json';

function getNotes() {
    let notes = [];
    try {
        let data = fs.readFileSync(jsonFile);
        notes = JSON.parse(data);
    } catch (e) {
        console.log('notes not defined');
    }
    return notes;
}

function saveNotes(notes) {
    let data = JSON.stringify(notes);
    fs.writeFileSync(jsonFile, data);
}

function nextId(notes) {
    let nextId = 1;
    if (notes.length > 0) {
        nextId = notes[notes.length - 1].id + 1;
    }
    return nextId;
}


module.exports = function(app) {


    app.get('/api/notes', function(req, res) {

        const notes = getNotes();
        res.json(notes);
    });



    app.post('/api/notes', function(req, res) {
        note = req.body;
        const notes = getNotes();
        note.id = nextId(notes);
        notes.push(note);
        saveNotes(notes);
        res.json(notes);
    });


    app.delete('/api/notes/:id', function(req, res) {
        const id = req.params.id;
        const notesBefore = getNotes();
        const notes = notesBefore.filter(note => note.id != id);
        saveNotes(notes);
        res.json(notes);
    });

};