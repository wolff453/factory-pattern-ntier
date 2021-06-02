const UserFactory = require("./factory/userFactory")
 


 ;(async  () => {

    const userFactory = await UserFactory.createInstance()
     const result = await userFactory.finda('SELECT * FROM users')
    console.log('resultado', result)
 })()