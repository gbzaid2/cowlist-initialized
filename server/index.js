const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const {getAllCows, insertCow, updateCow, deleteCow} = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static('./client/dist'))


//console.log(getAllCows);

app.get('/api/cows', (req, res) =>{
    getAllCows()
    .then((results) =>{
        res.status(200).send(results);
    })
    .catch((err)=>{
        res.status(500).send(results);
    })
});

app.put("/api/cows/:id", (req,res)=>{
    //console.log(req.params);
    var cow = {
        id: req.params.id,
        name: req.body.name,
        description: req.body.description
    }

    updateCow(cow)
    .then(() => {
        res.sendStatus(201);
    }).catch((err) => {
        res.status(500).send(err);
    })
    
})

app.post('/api/cows', (req, res) =>{
    insertCow(req.body)
    .then(data => res.sendStatus(201))
    .catch(err => res.sendStatus(500));

})

app.delete('/api/cows/:id', (req, res) => {
    var cowId = req.params.id;
    deleteCow(cowId)
    .then((data) => {
        res.status(201).send(data);
    }).catch((err) => {
        res.status(500).send(err);
    })


})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))