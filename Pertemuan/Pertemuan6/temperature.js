function fToC(){
    let fahrenheit = prompt('Massukan Derajat fahrenheit');
    let celsius = (fahrenheit - 32)/1.8;
    console.log(fahrenheit +' Fahrenheit =' + (celsius).toFixed(2) + ' Celsius');
}


export { fToC };