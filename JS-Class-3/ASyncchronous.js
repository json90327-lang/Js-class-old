let calac=(a,b,c)=>{
    if (c==="sum"){
        return a+b;
    }
    if (c==="multi"){
        return a*b;
    }
}
let r1=calac(2,3,"sum");
let r2=calac(2,3,"multi");
console.log(r1);
console.log(r2);