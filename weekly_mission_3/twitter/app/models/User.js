class User {
    constructor(id,username,name,bio,dateCreated,lastUpdate,getUsername, getBio, getDateCreated, gerLastUpdate){        
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdate = new Date();

        get getUsername(){
            return this.username
        }

        get  getBio (){
            return this.bio
        }

        get getDateCreated (){
            return this.dateCreated
        }

        get getLastUpdate (){
            return this.lastUpdate
        }
    }
}

module.exports = User
