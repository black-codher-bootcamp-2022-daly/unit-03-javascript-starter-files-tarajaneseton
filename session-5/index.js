// const personC = {
//     name: "Phil",
//     age: 30,
// };

// function legalThingsByAge(age) {

// }

// const canPhilDrive = personC.age >= 18 || personC.name === 'Phil'

// function canDrive(person) {

//     if (person.name !== 'Phil' || person.name !== 'Pippo') {
//         console.log('Hey you are not Phil or Pippo', person.name)
//         else if (person.name === 'Phil') 
//             console.log('hi Phil')
//         else 
//         console.log('hi Pippo')
//     }

//     return person.age >= 18 || person.name === 'Phil'
// }
// console.log('Can Phil drive?', canDrive(personC))

function getGrade(total) {

    switch (true) {
        case total > 90:
            console.log("A+");
            break;
            case total >= 80:
                console.log("A")
                break;
                case total >= 70:
                    console.log("B")
                    break;
                    case total >= 60:
                        console.log("C")
                        break
                        case total >= 50:
                            console.log("D")
                            break
                            case total >= 40:
                                console.log("E")
                                break
                                case total >= 30:
                                console.log("F")

                default:
                console.log("you fail")
                break;
    } 
   

    }

    getGrade(56)
    


    if (total > 90) {
        console.log('A+')
        }
        else if (total > 80 && total <=90) {
            console.log('A')
        }
        else if (total > 70 && total <=80) {
            console.log('B')
        }
        else if (total > 60 && total <=70) {
            console.log('C')
        }
        else if (total > 50 && total <=60) {
            console.log('D')
        }
        else if (total > 40 && total <=50) {
            console.log('E')
        }
        else if (total > 30 && total <=40) {
            console.log('F')
        }
        
        console.log('you fail')