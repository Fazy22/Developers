//jo kuch ham ne kiya ha neecha ham ne sara perform kr k dakha ha.
// JS Operators and Expressions //(ye sari cheezain ham ne practical ki hain prove hain)

let a = 4;
let b = 45;
console.log("a + b =", a + b);//is terah bhi ham likh sakta hain . 
console.log("a / b =", a / b);//ab yaha hamain quotient nai milla ga bulka accurate value
//mille gi jo k 11.25 ha 
console.log("a % b =", a % b);//is me hamain sirf wohi rule k mutabiq remainder hi milla ga.
//modulus me hamain c wala rule hi mila ga.// 
console.log("a ** b =", a ** b);//ye exponentiation operator ha means a ki power b ha. 
console.log("++a=", ++a);//abhi yaha a ki value 45 hi ae gi ku k ++ baad me ha.is liya pehla
//a ki value print kra ga phir ++ kra ga 
console.log("a++ =", a++);//ab yaha a ki value 46 hojae gi . 
console.log("a", a);//ye increment se a ki value ha wo change ho kr 47 hogai ha. 
// Comparison operators //
// Comparison operators ham tab use krta hain jab ham 2 cheezon ko apas me compare krta hain
//== ye sirf value ko dakhta ha type ko nai dakhta ha . 
//===equal value and type
let comp = "6";
let comp2 = 6;
console.log("comp==comp2 is", comp == comp2);//is ka answer boolean me hoga means false ae ga
console.log("comp===comp2 is", comp === comp2);//ye type aur value dono dakhta ha
console.log("comp!==comp2 is", comp !== comp2);//ye bhi type aur value dono dakhta ha
console.log("comp!=comp2 is", comp != comp2);//ye sirf value dakhtaa ha
//Logical operators me and , or aur not operators hain jo k ham ne perha hi hain . 

//Conditional Expression //(if,elseif,else)
let a3 = prompt("Hey whats your age !");
console.log(typeof a3);//age me ham ne no hi dala ha but type jo ha string ae gi prompt ki 
//quotes ki wja se.
a3 = Number.parseInt(a3)//Number k under aik function hota ha parseInt ye parseInt aik terika ha string
//ko number me convert krna ka.Aur is ko type casting kehta hain 
console.log(typeof a3);
if (a3 > 0) {
    alert("This is the valid page");
}
//alt+shift+arrow se ham duplicate bnata hain ye shortcut key ha. 
//ager ham multiple if else aur else if use krain to jo condition jis pr true hogi sirf whi 
//line execute hogi . 
//Switch
//jo case match kra ga us se aga sari statements execute hongi us se peecha se koi statement
//execute nai hogi. 
//isi terah ham switch ki baat krain to is hr statement check hogi chaha condition true mil
//bhi jae is liya ham jo ha end pr hr statement k baad break use krta hain ta k sari statements
//execute na hon . Ye ham ne pehla c language me perha ha. 
//Ternary Operator //ye bhi ham C language me perh chuka hain 
console.log("You can", (a3 < 18 ? "not drive" : "drive"));//is terah ternary operator use hota ha
//ager condition true ho to not drive aur ager false ho to drive.
let age = prompt("what is your age");
switch (age) {
    case "12":
        console.log("Your age is 12");
        break;
    case "13":
        console.log("Your age is 13");
        break;
    case "14":
        console.log("Your age is 14");
        break;
    case "15":
        console.log("Your age is 15");
        break;
    default:
        console.log("Your age is not special");//yaha pr aik baat gor ha k jo case true hoga
    //ager ham ne break statement use nai ki ha to us true case k aga wala sara case execute
    //hon ge us se peecha wala nai .Is liya break statement ka use krna zaroori ha
    //means jo true case hoga sirf wo hi execute hoga aur ager break statement na use krain 
    //to us se aga wala sara case bhi execute honga . 
}
let num = prompt("enter no");
num = Number.parseInt(num);//is ko likhne se jo no ham enter krain ge wo number me convert 
//hojae ga ooper ham ne perha ha . but ager ye na bhi idher likho to koi error nai ae ga 
//kr k dakh liya ha . 
if (num % 2 == 0 && num % 3 == 0) {
    console.log("number is divisible by 2 and 3");
}

