const express = require("express")
const app = express()
const port = 4004 

app.get("/greeting/:name", (req, res) => {
    res.send("Hello " + req.params.name + " how are you today?")
})



app.listen(port, () => {
    console.log('Express is running on ' + port)
})