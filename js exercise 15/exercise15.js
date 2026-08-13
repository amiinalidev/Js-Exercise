const student = [
    {
        name : "mohamed", age: 20, city: "cairo"
    },
      {
        name : "ali", age: 30, city: "new york"
    },
      {
        name : "najma", age: 40, city: "mexico"
    }
];

console.log("print all students in each details:");
for(const person of student){
    for (const key in person){
        console.log(key + ":" + person[key]);
    }
    console.log("-------");
}