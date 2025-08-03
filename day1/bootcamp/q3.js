// the prime factors of 13195 are 5,7,13,29
//what is the largest prime factor of 600851475143

// function isprime(num){
//     for(let i=2;i<num/2;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// let max;
// for(let i=2 ; i< 3377699720527870; i--){
//     if(3377699720527870%i == 0 && isprime(i)){
//         max=i;
//         if((i+1)*2 > 3377699720527870){
//             break;
//         }
        
//     }
// }

// console.log(`largest prime factor of 3377699720527870 is ${max}`);
let number = 600851475143;
let factor = 2;
let largest = 0;
while (number>1)
{
    if(number%factor==0)
    {
        number=number/factor;
        largest=factor;
    }
    else
    {
        factor=factor+1;
    }
}
console.log("Largest prime factor of 600851475143 is",largest);

