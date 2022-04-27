// usando objeto express
const express = require('express')

// App de express

const app = express()

// Puerto en que vamos a ver nuestra app: localhost: 300

const port = 3000

// path inicial, responderea a la url localhost:3000

app.get('/',(req, res) =>{

    res.send("Hello World!")

})

// Respondiendo texto 
// localhost:3000/lauchx

app.get('/launchx',(req,res) => {

    res.send('Bienvenidos a launchx')

})

//regresando un objeto
//localhost:3000/explorerInNode

app.get('/explorerInNode', (req,res) =>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)

})

//Query params: Recibir parametros por la url
//http://localhost:3000/explorers/miguel
//req.params = {"explorersName":"miguel"}

app.get ('/explorers/:explorerName', (req, res) =>{

    res.send(req.params)
})

// inicializamos la pp

app.listen(port,() =>{
    console.log(`Examples app listening ${port}`)

} )

