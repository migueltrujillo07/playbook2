// Ejemplo 8: Filtrar una lista por condicional 
const scores = [
    {name : 'A', score: 95},
    {name : 'L', score: 98},
    {name : 'M', score: 80},
    {name : 'E', score: 50},
    {name : 'M', score: 85},
    {name : 'J', score: 100},
          
]

const scoresgreater8 = scores.filter((score) => score.score >80)
console.log("Ejemplo 8: Filtrando elementos por Score")
console.log(scoresgreater8)
