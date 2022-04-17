// //Ejemplo 6: Uso de map para convertir todo los nombres de una lista 
// //a mayuscula

const countries = ['Finland','Demmarl','Sweden','Norway','Iceland']
const countriesfirstthreeletter = countries.map((country) => country.toUpperCase().slice(0,3))
console.log("EJemplo 6: Uso demapa para convertir todos en mayuscula")
console.log(countriesfirstthreeletter)
