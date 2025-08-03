// let arr=[];

// for(let i=0;i<100;i++){
//     arr[i]=i+1;
// }
// console.log(`array with 1 - 100 values ${arr}\n`)

// for(let i=0;i<100;i++){
//     arr[i]=arr[i]*3;
// }
// console.log(`triple ${arr}\n`)
// let newArr =arr.filter(e => e%5 == 0);
// console.log(`nums divisible by 5 ${newArr}`)

// let sum=0;
// for(let i=0 ; i<newArr.length;i++){
//     sum+=newArr[i];
// }
// console.log(sum)
let posSum = [3, 4, -5, -6, 7,-1].reduce((a, x) =>{if(x > 0){return (a+x)}else{return a}} );

console.log(posSum)  