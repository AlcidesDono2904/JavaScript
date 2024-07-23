/*let frutas=["manzana","melocoton","pera"];
console.log(sumar(10,20,05));
console.log(...frutas," son buenas frutas ");*/

console.log(..."Hello World!");

function sumar(...sumandos) {
    let result = 0;
    for (let valores of sumandos) {
        result += sumandos;
    }
    return result;
}