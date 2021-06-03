 class Database {
    constructor({connectionString}){
        this.connectionString = connectionString
    }
     

    async connect() {
         return this //Retorna o this para conseguir usar os métodos dessa classe
    }
 

    
 }

 
 module.exports = Database