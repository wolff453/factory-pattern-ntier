 class UserRepository{
    constructor({dbConnection}){
        this.dbConnection = dbConnection
    }

    async selectAllWithID(query) {
         this.dbConnection.connectionString.where({ID:query}).select().table("users").then(e => {
             console.log(e)
         })

   }
 
 
 
}

module.exports = UserRepository