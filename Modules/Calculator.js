exports.sum = function(a,b){
    return a+b
}

exports.subtract = function(a,b){
    return a-b
}

exports.emailVerification = function(email){
    if(email.includes('@')){
        return true
    }else{
        return false
    }
}