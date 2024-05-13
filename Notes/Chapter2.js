//Chapter 1: First ~14min of https://www.youtube.com/watch?v=qr6sKTzjlUo

//Chapter 2
'hello World' //This is a string

console.log('hello World')
console.log(4 + 4)

const sentence = 'hi mom' //const is for variables that won't change in value

let number_of_eggs = 3 //let is for variables that might change in value

console.log(number_of_eggs) //Outputs 3

number_of_eggs = 9 //Updates value 

console.log(number_of_eggs) //Outputs 9. This is due to the 'let' 

console.log(sentence)

//For boolean variables, there is no 'bool'. JS has only 'True' or 'False'

true && false

//Dictionaries

let me = {
    manuel: 25,
    city: 'Chicago'
}
console.log(me)

let example_array = [1, 'LA', true]

console.log(example_array)

let is_true = true

function myFirstFunction() {
    //output the value of is_true
    console.log(is_true)
}

myFirstFunction()

// && AND
// || OR

let condition1 = true
let condition2 = false

//If statements

if (condition1 && condition2) {
    console.log('Both conditions are true')
}
else if (condition1 || condition2) {
    console.log('One of the two conditions is true')
}
else {
    console.log('No conditions are true')
}

//loops

let example_array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i = 0
let length = example_array2.length
console.log(length)
while(i < length) {
    console.log('This is loop number: ', i, example_array2[i])
    i = i + 1 //Or i++
}

console.log('--BREAK--')

for (let j = 0; j < length; j++) {
    console.log('This is loop number: ', j, example_array2[j])
}

let string1 = 'My Cabbages!'
let string2 = 'The Flamey-Os'

function addStrings(string1, string2) {

    if (!string1 || !string2) {
        console.log('Your are missing an input')
        return //Takes you out of the function (i.e., stops the function).
    }

    let concatString = string1 + string2
    console.log(string1, string2)

}

addStrings(string1, string2)
addStrings(string2)