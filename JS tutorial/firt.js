// console.log(2+2);

// let name="Tech M";
// console.log(name);
// name="yokey"
// console.log(name);

// const id=33
// console.log(typeof id)

// let user
// console.log(typeof user)

//type conversion
let num1=6
num1=String(num1)
console.log(num1, typeof num1)

let x=8
x=x+""
console.log(x, typeof x)
x= +x+2
console.log(x, typeof x)

//Artithmeic Operators
let n1=2
let n2=3
console.log(n1+n2)
console.log(Math.pow(n1,4))
console.log(n1**4)

//Relational Operators
console.log(5<6)

// Logical operators
// AND . (&)
//OR +(|)
//NOT !(!)
let xa=7,y=8,z=5
let result =xa<y && xa<z
console.log(result)

//condition
let n=6
let m=4 
let res=n>m

if(res){
    console.log("N is greater");
}else{
    console.log("N is Lesser");
    console.log("Nothing");
}

//Ternary Operator
let net=9
let out
out=net%2==0 ? "Even" : "Odd"
console.log(out)

//Switch Statement
let day='Dooray'

switch(day){
    case 'Monday':
        console.log('7am');
        break;
    case 'Tuesday':
        console.log('8am');
    case 'Wednesday':
            console.log('9am');
    default:
        console.log('Rest')
}

//template
let r1=7
let r2=4
let output=r1+r2
console.log(`The addition of ${r1} and ${r2} is ${output}`);

//while
let i=0;
while(i<=5){
    console.log('HIII');
    i++;
}

//for
for(let j=1;j<=5;j++){
    console.log('Hello');
}

//object
let alien={
    name:"yokey",
    tech:"JS"
}
console.log(typeof alien);
console.log(alien['tech'])
console.log(alien.name)

//complex object,delete
let alien1={
    name:"yokey",
    tech:"JS",
    laptop1:{
        cpu:'i7',
        ram:16
    }
}
console.log(alien1.laptop1.ram)
console.log(alien1.laptop?.cpu.length)

//for in loop
let alien2={
    name:"yokey",
    tech:"JS",
    laptop2:{
        cpu:'i7',
        ram:16
    }
}
for(let key in alien2) {
    console.log(key, alien2[key])
}

//functions
function greet(){
    console.log('Hello World');
}
greet();

//function return and passing
function greet1(user){
    return `Hello ${user}`
}
let user="Yokey"
let str=greet1(user);
console.log(str);

//funnction expression
let add=function(num1,num2){
    return num1+num2
}
let resu=add(3,4)
console.log(resu)

//local-global variable
function greet2(u){
    return `Hello ${u}`
    Console.log(user1);
}
let user1="Yokey"
let str1=greet2(user1);
console.log(str1);
