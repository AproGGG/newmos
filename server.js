const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "/");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.get("/cat", (req, res) => {
    res.sendFile(path.join(initial_path, "cat.html"));
})

app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    let imagename = date.getDate() + date.getTime() + file.name;
    let path = 'uploads/' + imagename;

    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            res.json(`uploads/${imagename}`)
        }
    })
})

app.listen("3000", () => {
    console.log('listening......');
})