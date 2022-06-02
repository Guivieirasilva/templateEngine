const express = require('express')
const fs = require('fs')
const app = express()

const PORT = 3000

let user = {
    id: 0,
    name: "Guilherme Vieira",
    phone: "(11)95824-9395"
}

function render(data, obj){
    for(let key in obj){
        data = data.replace(`((${key}))`, obj[key])
    }
    return data
}

app.get("/", (req, res) => {

    fs.readFile("index.html", "utf-8", (err, data) => {
        if (!err) {

            res.send(render(data, user))
        }
    })

})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})