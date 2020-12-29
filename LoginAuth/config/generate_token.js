//this file used to generate the token.
//in general we will generate tokens by using jwt-simple module.
//converting "readable data" to "encrypted data" with "custom password" called as token. 

let jwt = require("jwt-simple");
let my_fun = (data,password)=>{
    return jwt.encode(data,password);
};
module.exports = my_fun;







