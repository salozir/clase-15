
//ejercicio 5
const tiempo = (array1, callback) => {
    callback(array1)
}

function orden(array){
    let arreglo = []
    for(let i=0; i < array.length; i++){
        if(array[i] >= 120){
            console.log(array[i])
            
        }
    }
    return arreglo
}
const result = tiempo([121, 12, 190, 200, 20], orden)

//console.warn("hola")