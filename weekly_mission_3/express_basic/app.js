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
// inicializamos la pp

app.listen(port,() =>{
    console.log(`Examples app listening ${port}`)

} )

