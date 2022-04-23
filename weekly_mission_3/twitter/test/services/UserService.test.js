const UserService = require('./../../app/services/UserServices')

describe("Test for services", () => {
   
    test("1. Create a new user using the UserService", () => {
        
        const user = UserService.create(1, "migueltrujillo", "mike")
        expect(user.username).toBe("migueltrujillo")
        expect(user.name).toBe("mike")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
        


    })


})
