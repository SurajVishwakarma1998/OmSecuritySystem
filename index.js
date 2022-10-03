const connectToMongo=require("./db");
const express = require('express');

connectToMongo();

const app = express()
const port = 3000
app.use(express.json())

//available routes
app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));

app.get('/', (req, res) => {
    res.send('Hello harry')
})

app.listen(port, () => {
    console.log(`hello`)
})