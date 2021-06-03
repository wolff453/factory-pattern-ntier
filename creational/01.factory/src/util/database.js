 class Database {
    constructor({connectionString}){
        this.connectionString = connectionString
    }
    async sleep(ms){
        return new Promise(resolve => {
            setTimeout(resolve,ms)
        })
    }

    async connect() {
           await this.sleep(100)
        return this //Retorna o this para conseguir usar os métodos dessa classe
    }
 

    // e(){
    //     return console.log("teste")
    // }
 }

 
 module.exports = Database