// CODE here for your Lambda Classes

class Person {
    constructor (valuesP){
        this.name = valuesP.name,
        this.age = valuesP.age,
        this.location = valuesP.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


class Instructor extends Person{
    constructor (valuesI){
        super(valuesI);
        this.specialty = valuesI.specialty,
        this.favLanguage = valuesI.favLanguage,
        this.catchPhrase = valuesI.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(studentObject, subject){
        return `${studentObject.name} receives a perfect score on ${subject}`;
    }
    changeGrade(studentObject, direction){
        let points = Math.ceil(Math.random() * 10);
        if (direction == 'increase'){
            studentObject.grade = studentObject.grade + points;
            if (studentObject.grade > 100){
                studentObject.grade = 100;
            }
            if (studentObject.grade < 0){
                studentObject.grade = 0;
            }
            return `${studentObject.name}'s new grade is a ${studentObject.grade}`;
        } else if (direction == 'decrease'){
            studentObject.grade = studentObject.grade - points;
            if (studentObject.grade > 100){
                studentObject.grade = 100;
            }
            if (studentObject.grade < 0){
                studentObject.grade = 0;
            }
            return `${studentObject.name}'s new grade is a ${studentObject.grade}`;

        } else {
            return `Hey what are you doing? the direction parameter only accepts "increase" or "decrease" as an argument. Try again buddy`
        }
    }
}


class Student extends Person{
    constructor (valuesS){
        super(valuesS);
        this.previousBackground = valuesS.previousBackground,
        this.className = valuesS.className,
        this.favSubjects = valuesS.favSubjects,
        this.grade = valuesS.grade
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(){
        if(this.grade > 70){
            return `Congrats! You can graduate!`;
        } else {
            return `Sorry, let's get back to grading assignments`;
        }
    }
}


class ProjectManager extends Instructor{
    constructor (valuesPM){
        super(valuesPM);
        this.gradClassName = valuesPM.gradClassName,
        this.favInstructor = valuesPM.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(studentObject, subject){
        return `${this.name} debugs ${studentObject.name}'s code on ${subject}`;
    }
}


const instructorOne = new Instructor({
    name: 'Lonzo',
    age: 36,
    location: 'Denver',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Yoooo what it do?!'
})
const instructorTwo = new Instructor({
    name: 'Lupita',
    age: 29,
    location: 'Peru',
    specialty: 'Computer Science',
    favLanguage: 'Java',
    catchPhrase: 'viva viva viva peru!'
})
const studentOne = new Student({
    name: 'JJ',
    age: 24,
    location: 'Florida',
    previousBackground: 'Professional Basketball Player',
    className: 'Web24',
    favSubjects: ['PE', 'Math', 'Literature'],
    grade: 100
})
const studentTwo = new Student({
    name: 'Jo-Jo',
    age: 21,
    location: 'San Diego',
    previousBackground: 'Singer',
    className: 'Web24',
    favSubjects: ['Art', 'Theater', 'Choir'],
    grade: 94
})
const pmOne = new ProjectManager({
    name: 'Kenny',
    age: 40,
    location: 'Wyoming',
    previousBackground: 'Teacher',
    className: 'Web24',
    favSubjects: ['Biology', 'Chemistry', 'Anatomy'],
    gradClassName: 'Web8',
    favInstructor: 'Lupita'
})
const pmTwo = new ProjectManager({
    name: 'Kris',
    age: 33,
    location: 'New York',
    previousBackground: 'FBI Agent',
    className: 'Web24',
    favSubjects: ['Criminology', 'History', 'Computer Science'],
    gradClassName: 'Web9',
    favInstructor: 'Lonzo'
})


// Logs for instructorOne Object
console.log(instructorOne.speak())
console.log(instructorOne.demo('CSS'))
console.log(instructorOne.grade(studentOne, 'CSS'))

// Logs for instructorTwo Object
console.log(instructorTwo.speak())
console.log(instructorTwo.demo('HTML'))
console.log(instructorTwo.grade(studentOne, 'HTML'))
console.log(instructorTwo.changeGrade(studentOne, 'decrease'))
console.log(instructorTwo.changeGrade(studentOne, 'decrease'))
console.log(instructorTwo.changeGrade(studentOne, 'decrease'))
console.log(instructorTwo.changeGrade(studentOne, 'decrease'))
console.log(instructorTwo.changeGrade(studentOne, 'decrease'))
console.log(instructorTwo.changeGrade(studentOne, 'decrease'))
console.log(instructorTwo.changeGrade(studentOne, 'decrease'))
console.log(instructorTwo.changeGrade(studentOne, 'increase'))
console.log(instructorTwo.changeGrade(studentOne, 'increase'))

// Logs for studentOne Object
console.log(studentOne.speak())
console.log(studentOne.listsSubjects())
console.log(studentOne.PRAssignments('CSS'))
console.log(studentOne.sprintChallenge('CSS'))
console.log(studentOne.graduate())

// Logs for studentTwo Object
console.log(studentTwo.speak())
console.log(studentTwo.listsSubjects())
console.log(studentTwo.PRAssignments('HTML'))
console.log(studentTwo.sprintChallenge('HTML'))

// Logs for pmOne Object
console.log(pmOne.speak())
console.log(pmOne.demo('CSS'))
console.log(pmOne.grade(studentOne, 'CSS'))
console.log(pmOne.standUp('web24_kenny'))
console.log(pmOne.debugsCode(studentOne, 'CSS'))

// Logs for pmTwo Object
console.log(pmTwo.speak())
console.log(pmTwo.demo('HTML'))
console.log(pmTwo.grade(studentTwo, 'HTML'))
console.log(pmTwo.standUp('web24_kris'))
console.log(pmTwo.debugsCode(studentTwo, 'HTML'))