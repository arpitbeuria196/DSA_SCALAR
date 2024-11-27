let x = 10;


if (true) {
    let x = 20;
    console.log(x); // 20
}
console.log(x); // 20

const z = 10;

if (true) {
    const z = 30; 
    console.log(z); 
}
console.log(z); // 10


for(var i=0;i<=2;i++)
{
    setTimeout(()=>{console.log(i)},1000)
}

function print(i)
{
    setTimeout(()=>{console.log(i)},1000)
}

for(var i=0;i<=2;i++)
{
    print(i);
}

const original =
{
    name:"Arpit",
    age:"19",
    address:{
        city:"Dublin"
    }
}

const shallowCopy = {...original};
shallowCopy.address.city="galway"
console.log(shallowCopy);
console.log(original);


const original2 = { name: "Alice", address: { city: "New York" } };

const deepCopy = JSON.parse(JSON.stringify(original)); 
deepCopy.address.city = "Los Angeles";

console.log(deepCopy);


const numbers = [1, 2, 3, 4];

const updated = numbers.map((number)=>number*2);

console.log(updated);

function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.greet = function()
  {
    console.log(this.name+"->"+this.age);
  };

  const person1 = new Person("Alice",30);

  console.log(person1.greet());


  function introduce(age,city)
  {
    console.log(`Hello, I am ${this.name}, ${age} years old from ${city}.`);
  }

  const pp = {name:"Arpit"};

  introduce.call(pp,30,"Bangalore");

  const arr1 = [1,2,3];
  const arr2= [4,5,6];
  const combined = [...arr1,...arr2];
  console.log(combined);

  const obj1={a:"123",b:"456"}
  const obj2={c:"789",d:"101112"}

  const comb2 = {...obj1,...obj2};
  console.log(comb2);