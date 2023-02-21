export default function bmi(){
    let berat = prompt("masukan berat badan (Kg)");
    let tinggi = prompt("masukan tinggi badan (Meter)");

    let bmi = berat / (tinggi * tinggi);

    console.log("berat badan ideal adalah ", (bmi).toFixed(2), "Kg");
}