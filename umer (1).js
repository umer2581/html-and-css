var a = "mo umer"
let b = "maths"
const c = "19"
console.log(a);
console.log(b);
console.log(c);
var name ="Name"
console.log(name)
name = "name1"
console.log(name)
//b = "english"
//console.log(b);
favoritesubject = "english"
console.log(favoritesubject);
//c = "age+1"
//console.log(c);
const intro = "Hi My name is " + name + " " + "and my favorite subject is " + favoritesubject + "my " + "age is " + c;
console.log(intro);
function fn(parameter1,parameter2) {
    return parameter1 + parameter2 * 2;

}
const result =fn(2,4);//result 10 because there is happen bodmas rule of maths.
console.log(result);
function emptyfn() {
return 1;
}
const result1 = emptyfn();
console.log(result1);//jab return nahi karte to undefined value aati hai aur jab return karte hai to value aati hai return hamesh end me aayega aur return ke baad koi hi line likhege to console.log me error aa jyegi
//return main function se vapas value dene ke liye kaam me aata hai