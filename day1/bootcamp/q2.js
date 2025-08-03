//sum of all even fibonaci numbers under 4000000

let a=1;
let b=1;
let ans=0;
let sum=0;
while(ans < 4000000){
    ans=a+b; 
    a=b;
    b=ans;
    if(ans %2 == 0){
        sum+=ans;
    }
}
console.log(`sum of all even  fibonaci numbers under 4000000 is ${sum}`)
