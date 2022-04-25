const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
        return [user.id, user.username, user.name, "sin bio"];
    }
    static updateUserUsername(user,newUsername){
        return user.username = newUsername
    }
    static getAllUsernames(user1, user2, user3){
        return [user1, user2, user3]
    }
    

}

module.exports = UserService


