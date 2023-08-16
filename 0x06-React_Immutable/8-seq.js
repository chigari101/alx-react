import { fromJS, Seq } from 'immutable';

function printBestStudents(grades) {
    const filteredGrades = Seq(grades)
        .filter(student => student.get('score') >= 70)
        .map(student => student.update('firstName', firstName => firstName.charAt(0).toUpperCase() + firstName.slice(1)))
        .map(student => student.update('lastName', lastName => lastName.charAt(0).toUpperCase() + lastName.slice(1)))
        .toJS();

    console.log(filteredGrades);
}

const grades = {
    1: {
        score: 99,
        firstName: 'guillaume',
        lastName: 'salva',
    },
    2: {
        score: 65,
        firstName: 'john',
        lastName: 'doe',
    },
    // ... other student entries ...
};

printBestStudents(grades);
