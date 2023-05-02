const express = require("express");
const app = express();
const corse = require("cors");
const port = process.env.PORT || 5000;
app.use(corse())

const chefData = require('./data/chef.json');


app.get('/', (req, res)=>{
    res.send("server running")
});


app.get('/chef', (req, res)=>{
    res.send(chefData)
})

app.get('/chef/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedId = chefData.find(data => data.id === id);
    res.send(selectedId)
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})