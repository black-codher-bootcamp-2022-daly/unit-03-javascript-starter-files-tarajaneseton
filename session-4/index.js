
    
    

const personA = {
    name: 'Will',
    age: 34,
    location: 'east london',
    likes: 'music'
}

const personB = {
    name: 'cleo',
    age: 2,
    location: 'east london',
    likes: 'apples'
}

const personC = {
    name: 'cherelle',
    age: 34,
    location: 'croydon',
    likes: 'wine'
}

const personD = {
    name: 'Tara',
    age: 34,
    location: 'east london',
    likes: 'chocolate'
}

function biography(person) {
    return `Hi my name is ${person.name}, I am ${person.age} years old and I live in ${person.location}. I like ${person.likes}.`
    }

console.log(biography(personC));
