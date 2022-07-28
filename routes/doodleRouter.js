const express = require('express');
const doodleRouter = express.Router();

doodleRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will get doodle information and image.');
})
.post((req, res) => {
    res.end(`Will add the doodle: ${req.body.name} with description: ${req.body.description}, and the jpg file.`);
})
.put((req, res) => {
    res.end(`Will update doodle: ${req.body.name} or description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end('Deleting doodle');
});

module.exports = doodleRouter;