var a = 10;
// a = "hello"; errors karena ada compile dimana di cek tipe datanya
var price = 123345678;
var orias = "orias";
console.log(a);
console.log(price);
console.log(orias);
var numbers = [1, 2, 3, 4, 5];
numbers.map(function (item) { return console.log(item); });
// tuples
var user = [1, 'a', 'b'];
user.map(function (item) { return console.log(item); });
var mySize = "L" /* SizeChart.Large */;
console.log(mySize);
// function
var getName = function (nameStr) {
    return nameStr;
};
console.log(getName("prias"));
