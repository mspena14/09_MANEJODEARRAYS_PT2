
console.groupCollapsed("Ejercicios Arrays")

console.group("Ejercicio 1")
//1. Crea un lista que almacene 10 nombres completos y ordenados alfabéticamente
let nombresCompletos = [
    "Marlon Stiven Peña Naranjo",
    "Ana López García",
    "Javier Martínez Rodríguez",
    "Carla Pérez Fernández",
    "Alejandro Ruiz Moreno",
    "Lucía Sánchez Martín",
    "Diego González López",
    "Marina Jiménez Pérez",
    "Sergio Rodríguez García",
    "Laura Martínez Sánchez"
]
let nombresCompletosOrdenados = nombresCompletos.sort()
console.table(nombresCompletosOrdenados)
console.groupEnd()

console.group("Ejercicio 2")
//2. Crea una
console.log("Crea una")
console.groupEnd()

console.group("Ejercicio 3")
//3. Utilizar un bucle for para sumar todos los elementos de un array de números.
let listaNumeros3 = [1, 2, 3, 4]
let suma = 0
for (let i = 0; i < listaNumeros3.length; i++) {
    suma = suma + listaNumeros3[i]
}
console.log(suma)
console.groupEnd()

console.group("Ejercicio 4")
//4. Iterar sobre las propiedades de un objeto utilizando un bucle for...in e imprimir sus valores.
let objeto4 = {
    nombre: "Marlon",
    apellido: "Stiven",
    edad: 30
}

for (let key in objeto4) {
    console.log(`${key}: ${objeto4[key]}`)
}
console.groupEnd()

console.group("Ejercicio 5")
//5. Utilizar un bucle for...of para sumar todos los números de un array.
let listaNumeros5 = [1, 2, 3, 4]
let suma2 = 0
for (let i of listaNumeros3) {
    suma2 += i
}
console.log(suma2)
console.groupEnd()

console.group("Ejercicio 6")
//6. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de strings.
let listaStrings5 = [
    "Marlon",
    "Stiven",
    "Peña",
    "Naranjo"
]

listaStrings5.forEach(function (string) {
    console.log(string)
})
console.groupEnd()

console.group("Ejercicio 7")
//7. Utilizar el método map() para obtener un nuevo array con cada elemento de un array de números multiplicado por 2.
let listaNumeros7 = [1, 2, 3, 4]

let listaNumeros7Por2 = listaNumeros7.map(numero => numero*2)

console.table(listaNumeros7Por2)
console.groupEnd()

console.group("Ejercicio 8")
//8. Utilizar el método filter() para obtener un nuevo array con solo los números pares de un array dado.
let listaNumeros8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let listaNumeros8Pares = listaNumeros8.filter(numero => numero % 2 === 0)

console.table(listaNumeros8)
console.table(listaNumeros8Pares)
console.groupEnd()

console.group("Ejercicio 9")
//9. Utilizar el método some() para comprobar si al menos uno de los elementos de un array de números es mayor que 10.
console.groupEnd()

console.group("Ejercicio")
//10. Utilizar el método every() para comprobar si todos los elementos de un array de números son positivos.
console.groupEnd()

console.group("Ejercicio")
//11. Utilizar el método sort() para ordenar un array de números de menor a mayor.
console.groupEnd()

console.group("Ejercicio")
//12. Utilizar el método reverse() para invertir el orden de un array dado.
console.groupEnd()

console.group("Ejercicio")
//13. Crear una función toReversed() que tome un array y devuelva un nuevo array con los elementos en orden inverso.
console.groupEnd()

console.group("Ejercicio")
//14. Utilizar el método forEach() para calcular la suma de todos los elementos de un array de números.
console.groupEnd()

console.group("Ejercicio")
//15. Iterar sobre las propiedades de un objeto y contar cuántas son de tipo string utilizando un bucle for...in.
console.groupEnd()

console.group("Ejercicio")
//16. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de objetos.
console.groupEnd()

console.group("Ejercicio 17")
//17. Utilizar el método map() para obtener un nuevo array con la longitud de cada string en un array dado.
console.groupEnd()

console.group("Ejercicio")
//18. Utilizar el método filter() para obtener un nuevo array con solo las strings que contengan la letra 'a' en un array dado.
console.groupEnd()

console.group("Ejercicio")
//19. Utilizar el método some() para comprobar si alguna string en un array dado tiene una longitud mayor que 10 caracteres.
console.groupEnd()

console.group("Ejercicio")
//20. Utilizar el método every() para comprobar si todas las strings en un array dado contienen al menos una vocal.
console.groupEnd()

console.group("Ejercicio")
//21. Dado un array de objetos que representan libros con propiedades titulo y paginas, utilizar
//filter() para obtener un nuevo array con solo los libros que tengan más de 300 páginas.
console.groupEnd()

console.group("Ejercicio")
//22. Dado un array de números, utilizar filter() para obtener un nuevo array con solo los números que sean divisibles por 3.
console.groupEnd()

console.group("Ejercicio")
//23. Dado un array de strings, utilizar filter() para obtener un nuevo array con solo las strings que tengan una longitud mayor que 5.
console.groupEnd()

console.group("Ejercicio")
//24. Dado un array de objetos que representan personas con propiedades nombre y edad,
//utilizar filter() para obtener un nuevo array con solo las personas mayores de 18 años.
console.groupEnd()

console.group("Ejercicio")
//25. Dado un array de booleanos, utilizar filter() para obtener un nuevo array con solo los valores true.
console.groupEnd()

console.group("Ejercicio")
//26. Dado un array de números, utilizar map() para obtener un nuevo array con el cuadrado de cada número.
console.groupEnd()

console.group("Ejercicio")
//27. Dado un array de strings, utilizar map() para obtener un nuevo array con cada string en mayúsculas.
console.groupEnd()

console.group("Ejercicio")
//28. Dado un array de objetos que representan productos con propiedades nombre y precio,
//utilizar map() para obtener un nuevo array con solo los precios de los productos.
console.groupEnd()

console.group("Ejercicio")
//29. Dado un array de objetos que representan personas con propiedades nombre y edad,
//utilizar map() para obtener un nuevo array con solo los nombres de las personas.
console.groupEnd()

console.group("Ejercicio")
//30. Dado un array de números, utilizar map() para obtener un nuevo array con la raíz cuadrada de cada número.
console.groupEnd()
console.groupEnd()