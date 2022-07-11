// function topla (a, b) {
//     return a + b ;
// }  1.yol ya da 1.yazım şekli.


// const topla = function topla (a, b) {
//   return a + b ; 
// }    2.yol ya da 2. yazım şekli.

// const topla = (a, b) => {
//     return a + b ; 
//   }    3. yol ya da 3. yazım şekli (errow fonksiyon)

// const topla = (a, b) => a + b ;  4.yol ya da 4. yazım şekli (bu da errow fonfiyon  ama daha kısa şekli)

// export default topla;   yukarıdaki 4 yazım şeklinde de kullandığımız dışarı aktarım yazım şekli.

// export const hello = () => {
//     console.log("hello");
// }
// export const topla = (a, b) => a + b ;   5.yol ya da yazım şekli.


// const hello = () => {
//     console.log("hello");
// }   Bu parametresiz hali.

// const hello = (name) => {  tek parametre varsa buradaki parantezlere de gerek yok;
    const hello = name => {
     // console.log("hello " + name);   Not:  Bu bir yazım şekli.Yani çıktı yazdırma şekli.
     console.log(`hello ${name}`);      Not:  Bu da bir yazım şekli. es6 ile gelen...
}   // Bu da parametreli hali.
const topla = (a, b) => a + b ;

export {hello, topla};