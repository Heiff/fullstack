const {v4:uuid} = require('uuid')
class Register{
    constructor(user,pass){
        this.id = uuid();
        this.user = user;
        this.pass = pass;
        
    }
} 

module.exports = Register