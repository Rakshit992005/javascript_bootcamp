let num=100n;
let fac=1n;
for(let i=1n;i<=num;i++){
    fac*=i;
}

console.log(fac);
let sum=0n;
while(fac > 0){ b
    let d=fac%10n;
    sum+=d;
    fac=fac/10n;
}
console.log(`sum of all digits of factorial of 100 is ${sum}`)