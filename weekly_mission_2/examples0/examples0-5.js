// example number 5

const pet = {
	name: "Woopa",
	sayHelloToMyPet: function(yourPet){
		console.log(`${this.name} say's hello to ${pet}`)

	}
}

console.log(`${this.name} say's hello to ${pet}`)
pet.sayHelloToMyPet("Tulio")
