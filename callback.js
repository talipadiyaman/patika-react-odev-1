// setTimeout (() => {
//     console.log("Merhaba 5 saniye sonra çıktı veririm. Yani ekranda gözükürüm.")
// }, 5000); // Not: terminale node callback.js yazarsak 5 saniye sonra string ifade ekrana çıkar.

// setInterval(() => {
//     console.log("Merhaba. Ben her 1 saniyede ekrana bu yazıyı vereceğim. ")
// }, 1000)

// const sayHi = (cb) => {
//     cb();
// } 
// sayHi(() => {
//     console.log("Hello");
// })

import fetch from "node-fetch";

// yazım şekli 1.
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {console.log("users yüklendi!", users);

//     fetch ("https://jsonplaceholder.typicode.com/post/1")
//     .then((data) => data.json())
//     .then((post) => {console.log("post 1 yüklendi!", post);

//     fetch ("https://jsonplaceholder.typicode.com/post2/2")
//     .then((data) => data.json())
//     .then((data) => console.log("post 2 yüklendi!", data));
// });
// });

// yazım şekli 2.
// async function getData () {
//     const users = await ( 
//         await fetch ("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await ( 
//         await fetch ("https://jsonplaceholder.typicode.com/post/1")
//     ).json();

//     const post2 = await ( 
//         await fetch ("https://jsonplaceholder.typicode.com/post/2")
//     ).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }
// getData();
// NOT: Her iki yol da aynı sonucu verir yani aynıdır. Ama 2.si daha okunaklı bir kod.

// Yazım şekli 2'nin daha farklı ve sade hali. Fonksiyon çağırma şekli de farklı!!! ;

// (async ()=> {
//     const users = await ( 
//                 await fetch ("https://jsonplaceholder.typicode.com/users")
//             ).json();
        
//             const post1 = await ( 
//                 await fetch ("https://jsonplaceholder.typicode.com/post/1")
//             ).json();
        
//             const post2 = await ( 
//                 await fetch ("https://jsonplaceholder.typicode.com/post/2")
//             ).json();
        
//             console.log("users", users);
//             console.log("post1", post1);
//             console.log("post2", post2);
// }) ();

import axios from "axios";

// axios kullanımı;

// (async ()=> {
//     const { data: users } = await axios ( 
//              ("https://jsonplaceholder.typicode.com/users")
//             );
        
//     const { data: post1 } = await axios ( 
//               ("https://jsonplaceholder.typicode.com/post/1")
//             );
        
//     const { data: post2 } = await axios ( 
//               ("https://jsonplaceholder.typicode.com/post/2")
//             );
        
//             console.log("users", users);
//             console.log("post1", post1);
//             console.log("post2", post2);
// }) ();

// PROMİSES :

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number === 1) {
//             resolve ({text: "selam"});
//         }
//         reject("Bir problem oluştu!.")
//     });
// }

// getComments(1)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));



const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios ("https://jsonplaceholder.typicode.com/users/");

        resolve (data);
        // reject("Bir sorun oluştu.")
    });
};

const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios ("https://jsonplaceholder.typicode.com/posts/" + post_id);

        // resolve (data);
        reject("Bir sorun daha oluştu.")
    });
};

// (async () => {
//     try {
//         const Users = await getUsers();
//         const post  = await getPost(1);

//         console.log(users);
//         console.log(post);
//     } catch (e) {
//         console.log(e);
//     }
// }) ();

// Hepsini birden yazdırmak için ;

Promise.all ([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log);
