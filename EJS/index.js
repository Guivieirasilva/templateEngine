const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const PORT = 3000

let users = [{
    id:0,
    name: "Guilherme",
    phone: "11958249395"
},
{
    id:1,
    name: "Vanessa",
    phone: "158426154"
},
{
    id:2,
    name: "Leonardo",
    phone: "11249395"
}]

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('user', {users:users})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando corretamente na porta ${PORT}` );
})