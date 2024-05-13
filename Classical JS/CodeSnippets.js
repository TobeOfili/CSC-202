

var age = 17;
var adult = (age > 20)? "Yes" : "No";
console.log(adult); //This should display the string "No"

5 << 1; //Equivalent of 5 * 2
5 <<2; //Equivalent of 5 * 4
5 <<3; //Equivalent of 5 * 8
40 >> 1; //Equivalent of 40 / 2 
40 >>2; //Equivalent of 40 / 4 
40 >>3; //Equivalent of 40 / 8

typeof "Pius Onobhayedo"; //Returns the value "string" typeof false; //Returns the value "boolean"
typeof (10 + 10); //Returns the value "number"
typeof 33; //Returns the value "number"


  
   for (var c = 1; c < 11; c++)
    {
       if(c == 7) break;
    console.log(c);
    }

    var n = 0; while(n != 5){
      n = Math.floor((Math.random() * 10));
      console.log(n) }


     
       
        var vehicles = ["car","lorry","trailer"];
        console.log(vehicles)

        console.log(myExpressions[0]);  
        console.log(myExpressions[1]); 
        console.log(myExpressions[2]); 
        
var myObject = { name: {
firstName : "Pius",
surname: "Onobhayedo" },
expertise: "Software design and development", 
languages: ["Python","JavaScript","Java","C++"],
isRetired: false,
favouriteCombination: 3 + 3 }

console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }. 
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
console.log(myObject.expertise); //Prints out Software design and development 
console.log(myObject['expertise']); //Also prints out Software design and development
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject.isRetired); //Prints out false 
console.log(myObject['isRetired']); //Also prints out false
console.log(myObject.favouriteCombination); //Prints out 6 
console.log(myObject['favouriteCombination']); //Also prints out 6

console.log(myObject.name.firstName); //Prints out Pius. 
console.log(myObject['name']['firstName']); //Also prints out Pius.
myObject.favouriteCombination = 9 + 9; 
console.log(myObject.favouriteCombination); //Prints out 18

var phones = {
  make: 'Samsung',
  model: 'S7',
  cost: 500 }
  console.log('make' in phones); //Prints out true
  delete phones.make; //Delete property phones.make 
  console.log('make' in phones); //Prints out false

  function Person(firstName, lastName, height, weight){ //Below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    //Below is a method
    this.getFullName = function(){ return this.firstName + " " + this.lastName}
    }



    
