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

app.get("/ai", (req, res) => {
    res.sendFile(path.join(initial_path, "ai.html"));
})


app.get("/neurotransmitters", (req, res) => {
    res.sendFile(path.join(initial_path, "neurotransmitters.html"));
})

app.get("/paradox", (req, res) => {
    res.sendFile(path.join(initial_path, "paradox.html"));
})

app.get("/quantum", (req, res) => {
    res.sendFile(path.join(initial_path, "qunatum.html"));
})

app.get("/hadron", (req, res) => {
    res.sendFile(path.join(initial_path, "hadron.html"));
})

app.get("/cat", (req, res) => {
    res.sendFile(path.join(initial_path, "cat.html"));
})

app.get("/quorum", (req, res) => {
    res.sendFile(path.join(initial_path, "quorum.html"));
})

app.get("/cube", (req, res) => {
    res.sendFile(path.join(initial_path, "cube.html"));
})

app.get("/lk", (req, res) => {
    res.sendFile(path.join(initial_path, "lk.html"));
})

app.get("/roman", (req, res) => {
    res.sendFile(path.join(initial_path, "roman.html"));
})

app.get("/graphene", (req, res) => {
    res.sendFile(path.join(initial_path, "graphene.html"));
})

app.get("/iot", (req, res) => {
    res.sendFile(path.join(initial_path, "iot.html"));
})

app.get("/time", (req, res) => {
    res.sendFile(path.join(initial_path, "time.html"));
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
