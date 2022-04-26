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

//Con esto inicializamos esa app

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)

})
