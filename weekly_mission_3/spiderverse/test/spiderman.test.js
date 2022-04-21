const Spiderman = require ('./../app/spiderman')

describe("Unit Tests for spiderman class", () => {

  test('1) Create an spiderman object', () => {
      // Aquí escribimos el codigo que queremos usar tal cual
      // Quiero poder instanciar un objeto Spiderman con esta información
      const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield", 2,"Sony")
      
      // Validamos que este codigo funcione de la forma esperada
      expect(andrewGarfield.name).toBe("Spiderman Sonny")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(31)
      expect(andrewGarfield.studio).toBe("Sony")
    
  });
})
