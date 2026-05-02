//const { useCallback } = require("react");

//let sum=(a,b)=>{
//    return a+b;
//}
//let multi=(a,b)=>{
//    return a*b;
//}
//let calc=(a,b,useCallback)=>{
//    return Callback(a,b)

//}
//let r1=calc(10,20,sum);
//console.log(r1);
//let r2=calc(10,20,multi);
//console.log(r2);

let goToMovie=(sucess,failure)=>{
    let acc_bal=800;
    if(acc_bal>=500){
        sucess("enjoy the movie")
    } else {
        failure("sorry, you don't have enough balance")
    }
}
goToMovie((resp)=>{console.log(resp)},(err)=>{console.log(err)})