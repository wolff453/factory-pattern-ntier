 class UserRepository{
    constructor({dbConnection}){
        this.dbConnection = dbConnection
    }

    async selectAllWithID(query) {
        const slct = await this.dbConnection.connectionString.where({ID:query}).select().table("users")
        return slct
   }
 
 
 
}

module.exports = UserRepository