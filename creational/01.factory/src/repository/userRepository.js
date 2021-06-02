 class UserRepository{
    constructor({dbConnection}){
        this.dbConnection = dbConnection
    }

    async select(query) {
        return this.dbConnection.select(query)

   }
 

    // test(){
    //     return this.dbConnection.e()
    // }

}

module.exports = UserRepository