// `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
const User = require('./../../app/models/User')
describe("Init TEST for user class", () =>{
    test('Create an user onject ',() =>{

       // Aqui invocas el codigo que vas a usar en nuestra app :) 

        const user = new  User(1, "MiguelLopez", "Miguel","Mechatronics in process","datecreated","lastupdate")
        //Aqui se validan los resultados de este codigo 
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha(valorEsperado)
        
        expect(user.id).toBe(3)
        expect(user.username).toBe("MiguelLopez")
        expect(user.name).toBe("Miguel")
        expect(user.bio).toBe("Mechatronics in process")
        expect(user.dateCreated).toBe("datecreated")
        expect(user.lastUpdate).toBe("lastupdate")

    })


})
