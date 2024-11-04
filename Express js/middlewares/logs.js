
function userCredentials(req,res,next){
    console.log('username: (alex)')
    console.log('email:(john@gmail.com)')
    console.log('password:(johnqwerty123)')
    next()
};

export default userCredentials