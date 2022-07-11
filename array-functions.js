const users = ["Mehmet", "Ahmet", "Murat"];

/*
push
map
find
filter
some
every
includes
*/

//***push: array'in sonuna eleman ekliyor.

// users.push("Ayşe");
// users.push("Fatma");
// console.log(users);

//*** map : Array içinde tek tek dönüyor.


// Normal döngü bu şekilde.

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);   
// }

//*** map ile birlikte for'a gerek duymadan aynı işlemi yapabiliriz;

// users.map((item) => {
//     console.log(item);
// })


//*** find : Array'in içerisinde verilen koşul ya da koşullara göre bir arama yapar.

const usersx = [{name : "Mehmet", age : 10,}, {name : "Ahmet", age : 30,}, {name : "Murat", age : 23,}];

// const result = usersx.find((item) => item.name === "Mehmet");
// console.log(result);

//*** filter : Filtreleme yapar.

// const filtered = usersx.filter((item) => item.name === "Mehmet" && item.age < 20);
// console.log(filtered);

 //*** some : verilen koşullara bir eleman bile uyuyorsa true, değilse false döner.

//   const some = usersx.some((item) => item.age === 10);
//   console.log(some);


//*** every : Bütün elemanların verilen şarta uyması durumuna bakar.

// const every = usersx.every((item) => item.age > 5 );
// console.log(every);

//***  includes : 

const meyveler = ["Elma", "Armut", "Muz"];
const isIncluded = meyveler.includes("Muz");
console.log(isIncluded);
