//find the sum all nums below 1000 that are divisibe by 3 or 5
let sum=0;
let bound=1000;
for(let i=1;i<bound;i++){
    if(i%3 == 0 || i%5 == 0){
        sum+=i;
    }
}
console.log(`sum of all nums divisible by 3 or 5 till ${bound} is ${sum}`)