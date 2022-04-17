const pet ={
	name: "Avena",
	//esta es una funcion que se guada como propieda
	sayHello: function(){
		// this.name hace referncia a la propiedad del objeto
		console.log(`${this.name} te saluda en español!`)
	}

}
console.log("Ejemplo 4: Objeto con Metodosi")
pet.sayHello()
