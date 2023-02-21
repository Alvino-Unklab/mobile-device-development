// //Array
// let john = ['john','doe', 35, true, [80, 90, 100]];
// john[2] = 40;
// console.log(john.length);
// //console.log(john,toString());
// //console.log(john.join);

// john.pop();
// console.log(john);

// john.push('Selamat Pagi');
// console.log(john);

// john.shift();
// console.log(john);

// john.unshift("Kamu");
// console.log(john);

// let students = [
//     {
//         fulName: "Bib",
//         age: 20,
//         address: "Manado"
//     },
//     {
//         fulName: "Bib",
//         age: 20,
//         address: "Manado"
//     },
//     {
//         fulName: "Bib",
//         age: 20,
//         address: "Manado"
//     }
// ];

// students.forEach(function(Name){
//     console.log(Name.age);
// });

let students = [
    {
        fulName: "Bib",
        age: 20,
        address: "Manado"
    },
    {
        fulName: "Bob",
        age: 21,
        address: "Tomohon"
    },
    {
        fulName: "Bab",
        age: 22,
        address: "Tondano"
    }
];

// let studentNames = students.map(function(value){
//     return value.fulName;
// });

// console.log(studentNames);

// let studentNames = students.filter(function(value){
//     return value.fulName == "John";
// });


let studentNames = students.filter(function(value){
    return value.age > 20;
});

console.log(studentNames);