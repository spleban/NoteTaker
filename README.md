# NoteTaker
An application that can be used to write, save, and delete notes. 

# Demo
https://github.com/spleban/NoteTaker/blob/master/NoteTakerDemo.wmv?raw=true

# Backend
An express backend and save and retrieve note data from a JSON file.
It uses a db.json file to store and retrieve notes using the fs module.

# Frontend
The application frontend has a

# HTML routes
GET /notes - returns the notes.html file.

GET * - returns the index.html file

# API routes
GET /api/notes - reads the db.json file and return all saved notes as JSON.

POST /api/notes - receives a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id - receives a query parameter containing the id of a note to delete. The procedure reads the storage file into an array, Removes the note and saves it back.

# Data Storage
The data is stored in a db.json file,  Each note has a unique id.

# Packages
fs
express
path


# User Story
AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete

# Business Context
For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

Acceptance Criteria
Application should allow users to create and save notes.
Application should allow users to view previously saved notes.
Application should allow users to delete previously saved notes.


