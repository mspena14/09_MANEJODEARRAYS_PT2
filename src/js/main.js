console.group("Manejo de arrays parte 2")
console.groupCollapsed("map")
const array1 = ["lucas", "pablo", "maria", "pedro"]
let array2 = [] //['LUCAS', 'PABLO', 'MARIA', 'PEDRO']
console.log(array1)

array2 = array1.map(nombre => nombre.toUpperCase())
console.log(array2)

let array3 = []

array1.forEach(nombre => array3.push(nombre.toUpperCase()))
console.log(array3)
console.groupEnd()

console.groupCollapsed("Reverse y toReversed")
let alphabet = ["A", "B", "C", "D", "E", "F"]

let alphabet2 = alphabet.reverse()//reverse altera la lista original
console.log(alphabet2)
console.log(alphabet)

let alphabet3 = alphabet.toReversed() //toReversed no altera la lista original
console.log(alphabet3)
console.log(alphabet)

let alfabetoMilitar = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
    "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
    "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
    "Yankee", "Zulu"
]
console.log(alfabetoMilitar)

let alfabetoMilitarToReversed = alfabetoMilitar.toReversed()

console.log(alfabetoMilitarToReversed)
console.log(alfabetoMilitar)
let alfabetoMilitarReverse = alfabetoMilitar.reverse()
console.log(alfabetoMilitarReverse)
console.log(alfabetoMilitar)
console.groupEnd()

console.groupCollapsed("sort")
let nombresCoders = [
    "santiago",
    "reycon",
    "narciris",
    "pablo",
    "carolina",
    "marlon",
    "brandon",
    "edson",
    "esteban",
    "carlos",
    "shirly"
]

let codersOdenados = nombresCoders.toSorted().toReversed()
console.table(nombresCoders)
console.table(codersOdenados)

let listaDeSupermercado = [
    "Leche",
    "Pan",
    "Huevos",
    "Arroz",
    "Pasta",
    "Manzanas",
    "Plátanos",
    "Pollo",
    "Verduras",
    "Cereal"
]

let listaMercadoOrdenada = listaDeSupermercado.toSorted().toReversed()
console.table(listaMercadoOrdenada)
console.table(listaDeSupermercado.toSorted())
console.table(listaDeSupermercado.toSorted().toReversed())
console.groupEnd()

console.group("filter")
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let numerosPares = numeros.filter(numero => numero % 2 === 0)

let numerosImpares = numeros.filter(function (numero) {
    return numero % 2 !== 0
})

console.log(numeros)
console.log("Numeros pares: ", numerosPares)
console.log("Numeros impares: ", numerosImpares)

//Sacar los nombres que empiezan con vocal y los que empiezan con consonante en una lista aparte

let coderVocal = nombresCoders.filter(function (coder) {
    if (coder.startsWith("a") || coder.startsWith("e") || coder.startsWith("i") || coder.startsWith("o") || coder.startsWith("u")) {
        return coder
    } else {}
})
console.log(coderVocal)
console.groupEnd()

console.group("every")
let numerosNaturales = [2, 3, 5, 9, 7, -10]

let respuesta = numerosNaturales.every(element => element > 0)//Todos deben cumplir o sino es false
let respuesta2 = numerosNaturales.some(element => element < 0)//Al menos uno que cumpla retorna true

console.log(respuesta)
console.log(respuesta2)
console.groupEnd()

console.groupEnd()