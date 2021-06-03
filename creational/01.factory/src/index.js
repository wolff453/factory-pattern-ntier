const UserFactory = require("./factory/userFactory")
 


 ;(async  () => {

    const userFactory = await UserFactory.createInstance()
     const result = await userFactory.finda(1)
    console.log('resultado', result)
    //resultado [[ TextRow { ID: 1, email: 'teste@gmail.com', senha: '123' } ]
 })()