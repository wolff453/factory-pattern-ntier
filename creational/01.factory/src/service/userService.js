class UserService{
    constructor({userRepository}){
        this.userRepository = userRepository
    }
    async finda(query){
        const users = await this.userRepository.selectAllWithID(query)
        return users
    }
}
module.exports = UserService