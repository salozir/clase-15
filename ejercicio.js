console.log("hola mundo")
setTimeout(()=>{
    console.log("hola")
} ,3000);
const suma = (y, x) => {
    console.log(y + x)
}
const resta = (y, x) => {
    console.log(y - x)
}
const multiplicacion = (y, x) => {
    console.log(y * x)
}
function ordenSuperior(callback){
    console.log('ejecutando');
    callback(4,7);
}
ordenSuperior(suma)
ordenSuperior(resta)
ordenSuperior(multiplicacion)