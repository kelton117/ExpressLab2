const express = require("express")
const app = express()
const port = 4004 



app.get("/greeting/:name", (req, res) => {
    res.send("Hello " + req.params.name + " how are you today?")
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Your tip is " + req.params.total * req.params.tipPercentage / 100)
})

app.get("/magic/:anything", (req, res) => {
    const eightBall = [
        "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
    ]
    var random = Math.floor(Math.random()*eightBall.length-1)
    res.send(`<h1>${eightBall[random]}</h1> <p>${req.params.anything}?</p>`)
})

app.listen(port, () => {
    console.log('Express is running on ' + port)
})