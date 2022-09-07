let a:number = 10;
// a = "hello"; errors karena ada compile dimana di cek tipe datanya
let price: number = 123_345_678;
let orias:string = "orias";

console.log(a);
console.log(price);
console.log(orias);

let numbers: number[] = [1,2,3,4,5];
numbers.map((item) => console.log(item));

// tuples

let user: [number, string, string] = [1,'a', 'b'];

user.map((item) => console.log(item));

//enum
const enum SizeChart {
    Small = 's', //default nya 0 dan terus bertambah ke bawah
    Medium = 'm',
    Large = 'L'
}

let mySize: SizeChart = SizeChart.Large;
console.log(mySize);

// function

const getName = (nameStr:string): string => {
    return nameStr
}

console.log(getName("prias"));


// object
interface IEmployee{
    username: string,
    age: number
}

let employee:IEmployee = {
    username:"orias",
    age: 20
}

console.log(employee);