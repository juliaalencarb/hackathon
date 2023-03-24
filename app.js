const express = require('express');
const cors = require('cors');

const diaryRouter = require('./routers/diaryRouter.js');

const app = express();


app.use(express.json());
app.use(cors());
app.use('/diary', diaryRouter);

app.get("/", (req, res) => {
    res.json({
        "Application Name": "E-Diary",
        description: "Write here your secret thoughts."
    })
})

module.exports = app;