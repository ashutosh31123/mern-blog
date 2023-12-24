const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ashupanda123:ashu@12puja@cluster0.ldjnobj.mongodb.net/ashupanda123?retryWrites=true&w=majority');

app.post('/register', async(req, res) => {
    const { username, password } = req.body;
    res.json({requestData:{username, password}});
});

app.listen(4000);
