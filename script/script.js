const users = [
    {
        name: 'Bob',
        age: 27,
        address:{
            country:'USA',
            city:'LA'
        },
        marks:[2,3,5,4,2,3,1,5]
    },
    {
        name: 'July',
        age: 21,
        address:{
            country:'Ukraine',
            city:'Kiev'
        },
        marks:[4,4,5,4,3,4,3,5]
    },
    {
        name: 'Monya',
        age: 15,
        address:{
            country:'Ukraine',
            city:'Odessa'
        },
        marks:[5,1,5,1,5,1,5,1]
    },
    {
        name: 'Vsevolod',
        age: 19,
        address:{
            country:'Ukraine',
            city:'Lviv'
        },
        marks:[3,4,5,3,1,2,4,6]
    },
];
console.log(`users: `, users);
let isNotAdult = users.filter(function (users) {
    return users['age'] <= 18;
});
console.log(`Not adult users: `, isNotAdult);

let foreignStudent = users.filter(function (users) {
    return users['address']['country'] !== 'Ukraine';
});
console.log(`foreign students: `, foreignStudent);

const usersUpdated = users.map( function (user)  {
    let averageUserMark = user.marks.reduce((sum, current) => sum + current)/(user.marks.length - 1);
    return {
        ['name']: user.name,
        ['age']: user.age,
        ['marks']: user.marks,
        ['address']: user.address,
        [`isAdult`]: user[`age`] >= 18,
        [`averageMark`]: averageUserMark
    }
});

console.log(`Users updated: `, usersUpdated);

// average mark
const totalStudentsMarks = usersUpdated.map( user => {
    return user['averageMark'];
})

let sumOfStudentsMarks = totalStudentsMarks.reduce((sum, current) => {
    return (sum + current);
})

let averageMark = sumOfStudentsMarks / (totalStudentsMarks.length - 1);
console.log(`average mark of students: `, averageMark);


// countries and cities

let addresses = {
    countries: usersUpdated.map(student => {
        return student['address']['country'];
    }),
    cities: usersUpdated.map(student => {
        return student['address']['city'];
    })
}
console.log(addresses);