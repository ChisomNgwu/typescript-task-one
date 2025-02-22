// user interface and admin interface are created
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}


interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

// Person type is created which can be either user or admin

type Person = User | Admin;

// Person Array  objects are created with type user and admin
const persons: Person[] = [
    { type: 'user', name: 'Ben Jackson', age: 22, occupation: 'Plumber' },
    { type: 'admin', name: 'Aiden Klopp', age: 42, role: 'Organizer' },
    { type: 'user', name: 'Elena Heyes', age: 22, occupation: 'Pilot' },
    { type: 'admin', name: 'Dwayne Joe', age: 70, role: 'Artist' },
    { type: 'user', name: 'Evie Conard', age: 30, occupation: 'Dentist' },
    { type: 'admin', name: 'Ahren Jang', age: 70, role: 'Administrator' }
];

// logPerson function is created to log the person details
function logPerson(person: Person) {
    console.log(
        `${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

// filterPersons function is created to filter the persons based on the type and criteria
function filterPersons(persons: Person[], personType: string, criteria: { [key: string | number]: string | number }): Person[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldAge) => {
                return person[fieldAge] === criteria[fieldAge];
            });
        });
}


// Users of age 22 and Admins of age 70 are filtered and logged 
const usersOfAge22 = filterPersons(persons, 'user', { age: 22 });
const adminsOfAge70 = filterPersons(persons, 'admin', { age: 70 });


console.log(`Users of age 22: ${usersOfAge22.length}`);
usersOfAge22.forEach(logPerson);

console.log();

console.log(`Admins of age 70: ${adminsOfAge70.length}`);
adminsOfAge70.forEach(logPerson);



// Output

// Users of age 22: 2
// Ben Jackson, 22, Plumber 
// Elena Heyes, 22, Pilot

// Admins of age 70: 2
// Dwayne Joe, 70, Artist
// Ahren Jang, 70, Administrator