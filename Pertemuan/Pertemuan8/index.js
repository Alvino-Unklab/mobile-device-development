//asynchronous JS


// 1. Paralel

// console.log('Proses 1');
// setTimeout(() => {
//     console.log('Proses 2');
// }, 5000);
// console.log('Proses 3');

// 2. Concurent

// setTimeout(() => {
//     console.log('Proses 1');
//     setTimeout(() => {
//         console.log('Proses 2');
//         setTimeout(() => { 
//             console.log('Proses 3');
//             setTimeout(() => {
//                 console.log('Proses 4');
//             }, 5000)
//         }, 5000);
//     }, 5000);
// }, 5000);

// Promise

let condition = true
let newPromise = new Promise((resolve, reject) => {
    if(condition){
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

//2 Cara menggunakan promise

//1. then - catch
newPromise.then((result) => console.log(result));