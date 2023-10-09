const express = require("express")
const app = express()
const path = require("path")
const PORTA = 8080

const videos = [
    '1234',
    '4321',
    '874687468',
    '5827227247'
]

app.get("/api/videos",(req,res)=>{
    res.send(videos)
})

app.use(express.static(path.join(__dirname,'front/build')))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'front/build/index.html'))
})

app.listen(PORTA,()=>{
    console.log(`O servidor está rodando na porta: ${PORTA}`)
})