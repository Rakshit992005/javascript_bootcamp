//objects in js

// const my_Oject={
//     "name" :"Rakshit",
//     "age":20,
//     "isStudent" :true,
//     "hobbies" : ["cooding" , "gym" ,  "reading"],
//     "add":{
//         "city":"Kharghar",
//         "pinCode":410210
//     }
// }

// console.log(`Name ${my_Oject.name}`);
// console.log(`Age ${my_Oject.age}`);
// console.log(`City ${my_Oject.add.city}`);
// console.log(`student or not ${my_Oject.isStudent}`);
// console.log(`hobbies ${my_Oject.hobbies}`);
// console.log(`fav hobbies ${my_Oject.hobbies[0]}`);

// my_Oject.age+=1
// console.log(my_Oject.age)

// my_Oject.add{"mobile" : 7506283831};
// console.log(my_Oject)

const users=[
    {name:'alice', age : 25},
    {name:'bob' , age :30},
    {name:'charli' , age :25}
]
let sum=0;
// users.forEach(e =>{
//     sum+=e.age;
// });

sum=users.reduce((a,x) => (a+x.age),0)

console.log(sum/users.length) 
console.log(users[0].age)