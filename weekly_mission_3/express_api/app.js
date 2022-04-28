const express = require ('express')

// App de Express

const app = express()
app.use(express.json()) // Indicamos que usaremos JSON

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Miguel1"}

})

//Con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)

})
