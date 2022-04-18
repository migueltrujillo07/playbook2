// Ejemplo 10: Uso de every nos ayuda a validar toso los elementos de una lista 

const name = ['Explorer 1','Explorer 2','Explorer 3','Explorer 4']
const areAllStr = name.every((name) => typeof name === 'string')
console.log("Ejemplo 10: Son todos los nombres strin: " + areAllStr)

