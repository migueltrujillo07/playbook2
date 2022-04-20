const Ajolonauta = require('./../app/Ajolonauta');
describe("Unit Test for Mission Commander Class", () =>{
    test('1) Create a  mission commander objet', () => {
        const myMissionCommander= new Ajolonauta("Woopa")
        const result = 1 + 2
        expect (result).toBe(3)
        expect (myMissionCommander.name).toBe("Woopa")
    })
})
