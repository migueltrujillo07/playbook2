const UserService = require('./../../app/services/UserServices')

describe("Test for services", () => {
   
    test("1. Create a new user using the UserService", () => {
        
        const user = UserService.create(1, "migueltrujillo", "mike")
        expect(user.username).toBe("migueltrujillo")
        expect(user.name).toBe("mike")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
        


    })

    test("2. Get all user data in a list",() =>{

        const user = UserService.create(1, "migeltrujillo", "miguel")
        const userInfoInList = UserService.getInfo(user)
        expect(user.InfoInList[0]).toBe(1)
        expect(user.InfoInList[1]).toBe("migueltrujillo")
        expect(userInfoInList[2]).toBe("miguel")
        expect(userInfoInList[3]).toBe("sin bio")
        

    })

})
