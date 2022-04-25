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

        const user = UserService.create(1, "migueltrujillo", "miguel")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("migueltrujillo")
        expect(userInfoInList[2]).toBe("miguel")
        expect(userInfoInList[3]).toBe("sin bio")
        

    })

    test("3. Update username", () => {
    
        const user = UserService.create(1, "migueltrujillo","miguel")
        UserService.updateUserUsername(user,"mike")
        expect(user.username).toBe("mike")
    })
    test("4. Given a list of users gice me the list od usernames", () =>{

        const user1 = UserService.create(1, "migueltrujillo1", "mike")
        const user2 = UserService.create(1, "migueltrujillo2", "mike")
        const user3 = UserService.create(1, "migueltrujillo3", "mike")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("migueltrujillo1")
        expect(usernames).toContain("migueltrujillo2")
        expect(usernames).toContain("migueltrujillo3")


    })


})
