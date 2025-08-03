// const abc="hii";
// aa=abc;
// console.log(aa)
// console.log("value of abc " + abc)
// console.log(`value of abc ${abc}`)

// function greet(n ,a) {
//     let msg=`hello ${n} you are ${a} year old`
//     return msg;
// }
// const greeting = greet("Raj" , 21)
// console.log(greeting)
// console.log(greet("Parth" , 20))

// let temprature = 27;

// if(temprature > 30){
//     console.log("Its a hot day " +temprature);
// }
// else if(temprature >20){
//     console.log("its a pleasant day " +temprature)
// }
// else{
//     console.log("Its a chill day " +temprature)
// }


function calArea(l,w=1){ // here w will get value 1 if not passed in the function call
    return l*w;
}

console.log(calArea(2,3))
console.log(calArea(2))

const getsum =function(a,b){ return a+b}
console.log(getsum(2,3))

const mul =(x,y) => x*y;
console.log(mul(2,3))

const mul2 =(x,y) =>{
    r=x*y;
    return r+4;
}
console.log(mul2(2,3))