
// spread operator
const numbers =[1,2,3];
const newNumbers =[...numbers, 4,5,6];
console.log(newNumbers);


// rest operator
function multiply(...numbers){
    return numbers.reduce((total, number)=> total * number);
}
console.log(multiply(2,4));