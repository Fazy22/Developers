//jo kuch ham ne kiya ha neecha ham ne sara perform kr k dakha ha.
//INTRODUCTION TO JS//(ye sari cheezain ham ne practical ki hain prove hain)
//Ecma script js ka aik standard ha . ecma script pr js base krti ha . means is standard ko follow
//krna pera ga. Ecma script ye btati ha k different documents jo js pr likha gae hai wo 
//same langauge k hain . 
//js ko execute krne k kai terika hain browser etc. js ham use krta hain ta k ham interactive
//web applications bna sakain i.e ham whatsapp web pr aik aik doosra ko messg etc send krta hain
//to hamain reload krna ki zaroorat nai perti ha wo directly messg hamara pass ajata hai 
//js ko execute krne ka sab se asaan terika browser ha. 
//sir ne kha ha k ye course dakhna k baad aap js k champion bn jao ge Inshallah. 
//js aik dynamically type language ha is ka mutlab ye ha k hamain ye declare krne ki zaroorat
//int,float etc bas yaha let , const aur var 3 keywords use hota hain 
//let ko ham redeclare nai krsakta hain same name k saath but same name k saath doobara value assign kr sakta hain. 
//const ko na to redeclare kr sakta hain same name k saath aur same name k saath na hi doobara value assign kr sakta hain . 
//var ko ham redeclare bhi same name k saath aur doobara value bhi assign kr sakta hain same name k saath . 
//let ko block scope kehta hain ku k ager function  k under let use kiya ha to ham function 
//k bahir let ki value nai le sakta  jab k var ki le sakta hain ku k var k saath window object
//hota ha aur ye ham pehla perh chuka hain . aur const bhi block scope hota ha. aur aik
//baat yaad rakhni ha k ager function k bahir function se ooper ham let ko declare kr k 
//function k under let ki value initialize kr sakta hain. aur is terah phir ham function k 
//neecha means neecha se bahir let ki value bhi access kr sakta hain.but const ko initialize
//krna bhi zaroori ha.
//(IMPORTANT)//
//Nearly everything in JavaScript is an object other than six things that are not objects which 
//are — null , undefined , strings, numbers, boolean, and symbols. These are called primitive values
// or primitive types.Nearly everything in JavaScript is an object other than six things that 
//are not objects which are — null , undefined , strings, numbers, boolean, and symbols. 
//These are called primitive values or primitive types.Nearly everything in JavaScript is an 
//object other than six things that are not objects which are — null , undefined , 
//strings, numbers, boolean, and symbols. These are called primitive values or primitive types.
let x = 67;
x = 2;
console.log(x);//ab memory me 67 ki jagga 2 ae ga. 
//js case sensitive language hoti ha means is me capital letter aur small letter different 
//consider kiya jata hain . 
//Es6 se pehla kisi bhi variable ko declare krne k liya ham var use krta tha but ham ab const 
//aur let bhi use kr sakta hain . 
//ES6 means ecma js modern js jis me bohat se new cheezain add ki gai hain . 
let c;
//const d;//const ko initiallize krna zaroori ha . 
//sir ne kha k var ko kabhi nai use krna hai . 
//Primitive data types and objects(objects non primitive data type ha. )//

//              
// Js k under 7 perimitive data types(built in ) hain . 
//1 Number short for (NN,SS,BB,U)
//2 Null
//3 Symbol
//4 String
//5 Boolean
//6 BigINT
//7 Undefine
//objects key value pairs hota hain jo aik key hoti ha wo aik string or no hosakta ha
let a = null;//is ka mutlab a me kuch nai ha khali ha . 
let b = 345;
let q = true;
let k = BigInt("567") + BigInt("5");//is terah ham bra integer dal sakta hain aur is ko plus 
//bhi kr sakta hain sir ne kha ha k ham ana wali videos me big int k bara me perhain ge . 
let e = "344";
let j = Symbol("I am a symbol ");
console.log(j)
let m = undefined;//is ka mutlab ha k ye undefine ha is ham ne let m kr k chor diya ha. 
console.log(a, b, q, k, e, j, m);
console.log(typeof j);//is terah ham type bhi check kr sakta hain .
//objects in js 
const item = {
    "harry": true,//ye jo colon k left side wali values hain in ko double quotes me na bhi 
    //likhain to kuch nai hota ha zayada theek na likhain . 
    "faizan": 45,
    "hhh": 60
} //ye ham pehla perh chuka hain . is liya mazeed ham is pr behas nai krain ge. //ye object 
//bohat useful ha. ab is ko ksa access krna ha ye ham sab perh chuka hain  pehla .
//Chapter 1 practice set //
//Q1
let a1 = "harry";
let a2 = 3;
console.log(a1 + a2); //is terah jab string aur number ko add kiya jae to wo apas me 
//concatinate hojata hain . 
//Q2
console.log(typeof (a1 + a2));//is se pta chala k string + no ki type string hoti ha. 
//operators precedence ka bhi khas khyal rakhna ha. 
//sir ne kha ha k ham ana wala waqt me har cheez acha se seekhain ge . 
//Q3
const item1 = {
    harry: "faizan",
    number: 567
}
//item1.name="faisal"; In dono teriko se ham object me key dal sakta hain . 
//item1["name"] = "fazy" 
//ham kisi object ki is terah value bhi change aur add kr sakta hain . 
console.log(item1);
//Q5 Write a program to create dictionary of 5 words ?
const dic = {
    large: "big",
    beautiful: "nice",
    cup: "glass"
}
console.log(dic.beautiful);
