//jo kuch ham ne kiya ha neecha ham ne sara perform kr k dakha ha.
//(ye sari cheezain ham ne practical ki hain prove hain)
// Strings abhi neecha yaha ham string k methods perhain ge Array k baad me ana wala lectures
//me perhain ge . 
//Js k under template literal ka set bohat bri problem ko solve krta ha abhi ham sab kuch perhian
//ge.
//string ko ham double quotes aur single quotes aur aik aur terika ha in sab se bna sakta hain
//teesra terika abhi perhain ge. 
let name1 = "harry";
console.log(name1.length);
console.log(name1[0]);
//object ka index nai hota ha.is liya peecha ham ne object ko object.keys method se array me
//convert kiya.aur ye ham ne kr k dakh liya ha.
//is terah k methods jo hain ham ne pehla perhain hain abhi aga 
//doobara perhain ge ye jitne bhi is terah k methods hain ye string aur array me use hota hain
//ye baat gor ha k ham ne yaha array k lahaz se hi search kiya ha k 0 pr h ha aur 1 pr a 
//isi terah baqi bhi hain
//Sir ne btaya k counting is liya yaha bhi 0 start hogi ku k jis ne ye programming bnai
//ha us ne ye decide kiya k counting 0 se start hogi.jo is []bracket me hota ha is ka mutlab 
//index ha means k string me index hota ha index hr us cheez ka hoga jo iterate hogi.ok.
//Means k string ki index aur array ki index aur koi cheez jo iterate ho us ka index 0 
//se start hoga .
 
            //Template Literals // (Part of modern JS)
let boy1 = "irfan";
let boy2 = "imran";
let sentence = `${boy1} is a "friend" 'of' ${boy2}`;//ab ye jo line ha ye same to same print hogi
//boy1 aue boy2 ki jagga irfan aur imran print nai hoga . but bectics ka faida ye ha 
//k hamain concatinate krne ki zaroorat nai pera gi . aur ager variable name k bahir $ likh
//dain to phir jo ha variable ki value print hogi . Aur is ko template literals hi kehta hain
//Aur ham bectics k under double aur single quotes bhi daal sakta hain . 
//We can insert variable directly  in template literal. This is called string interpolation.
console.log(sentence);
//Escape Sequence Charactors (Same C language jsa hain)//
let fruit ="bnana";//ye back slash \" ye double quotes dalta ha 
console.log(fruit);//ye escape sequence\" back slash double quote poora aik charactor
//ha is liya length 7 ki jagga 6 ae gi.\r aur \b js me execute nai hota hain.aur baqi jitne
//bhi back slash k saath escape sequences hain wo aik hi charactor tasleeem hon ge aur ye 
//ham ne practically bhi kr k dakh liya ha. 
       
               //JS Strings Methods By code with harry//

               //Different methods of strings are as follow //
//(1):Length;ye aik property ha jo k string ka aik methode ha.
let name2 = "harry";
console.log(name2.length);
//(2):toUpperCase();//ye aik predefined function ha jo k string ka aik methode ha.
console.log(name2.toUpperCase());//is terah is lion jo ha wo upper case me convert hojae ga. 
console.log(name2);//ham strings methode ko use kr k string ko change to kr leta hain but
//ye baat yaad rkhni ha string immutable hota hain means aik string kabhi change nai hosakti
//ha ham ne console name2 kr waya to jsa string tha wsa hi ae ga ham ne mid me toUpperCase()
//lga kr is ko upper case me bhi convert kiya but memory me string me koi changing nai ae gi
//sirf methode ki had tak jo wo change hoga means jab methode use krain aur is methode 
//ko console krwain tab jo ha string change hoga . Menas ham ne uppercase ko jab console kiya
//to sirf is uppercase k console me hi string upper case me convert hoga aur is k baad ager
//ham isi string ko cosole krwain to wo jsa ha tha wsa hi rha ga means wo apni purani halat me
//hi rha ga is me koi changing nai ae gi.ye sara ham ne prove kr liya ha. 
 name2[0]="j";//ham na to string ko change kr sakta hain 
  name2[5]="n";//aur na hi koi new value add kr sakta hain string me.
 console.log(name2);//is terah se bhi ham string ko change nai kr sakta hain aur na 
 //hi is k kisi index ko ku k string immutable hota hain means ham in ko change nai kr sakta hain
 const hen = ["hello","he"];
 hen[0]="by";
 console.log(hen);//array ko ham change kr sakta hain prove kr liya ha
const hen1={
    car:"honda",
    bike:"seventy"
}
hen1.car="new";//object ko bhi ham change kr sakta hain but is ka methode ye wala ha jo ham 
//ne likha ha index wla nai ha ku k ye object pr index nai lgta ha ku k ye object iterable nai
//ha. 
hen1.cycle="old";//is terah ham object me new key bhi add kr sakta hain.
console.log(hen1);

//(3):toLowerCase();
console.log(name2.toLowerCase());
//(4):slice();
console.log(name2.slice(2,4));//ye 2nd index se le kr 3rd index tak jae ga is me 4 index
//include nai hoga . means aik kam tak jae ga hr kisi me
console.log(name2.slice(2));//ager ham 2nd argument nai dain ge to index 2 se le kr sari 
//string print hojae gi . 
//(5):replace();
console.log(name2.replace("har","PAR"));//is terah har jo ha par se replace hogaya ha. 
//jo string me charactors likhain un k mutabiq hi replace kra ga. Pehli value wo hoti ha
//jo string me majood ha jis ko replace krna ha aur doosri wo jis k saath replace krna ha.
 
//(6):concat();
let name3 = "Usman" ; //ab ager ham chahain k nam2 ko name3 se jorain to is k liya ham jo 
//ha concat() method use krain ge. mutlab k aik cheez ko doosri cheez se jorna k liya ham 
//concat() methode use krta hain  . 
console.log(name2.concat( " is a friend of ", name3));//is concat ne sari aga wali line ko
//name2 se jor diya ha. means yaha hamain + k sign ki zaroorat nai rhi us ki jagga ham ne 
//.concat use kr liya ha . 
//(7):trim(); Bohat important method ha sir ne kha ha. 
let name4 = "         Anwar             " ;
console.log(name4.trim());//ager ham in spaces ko khatam krna chahta hain jo Anwar k left 
//aur right hain to ham jo trim method ko use krain ge. 
//String k bohat se methods hota hain sir ne kha k aap ne string methods ko yaad nai krna ha.
//sir ne kha ha ager ap ko koi requirement ae gi string k methode ki to aap google kr lo
//ku k string k sara methode yaad nai hosakta hain . 
//(8):ye jitne bhi string k methode hain ye new string return krta hain means original 
//string me koi changing nai hotia ha. 
//STRINGS ARE IMMUTABLE//
let r = "sultan";
console.log(r[0]);//is terha ham string k charactor ko dakh sakta hain means k 0 no pr 
//s ata ha is liya s jo ha print hoga . 
for(let i = 0 ; i<r.length;i++){
   console.log("the string is " + r[0] + r[1] + r[2] + r[3] + r[4] + r[5]);

}//is terah ham ne for loop use kr k string ko print krwaya complete string ko . 
         // String Practice set //
//(9):includes();
const Sentence = "The word";
const word = "word";
console.log(`${word} is the part of ${Sentence.includes(word)?"this sentence":"not"} `);
//is terha ham includes()method string me use krta hain. 
//(10):startsWith(),endsWith();
//Often you'll want to know if a string starts or ends with a particular substring. This is a 
//common enough need that there are two special methods for this: startsWith() and endsWith():
//Means starts aur ends with() ham tab use krta hain jab ham string k under dakhta hain k
//ager string is se start horha to ye print kr do ager string is se end horha ha to ye print
//kr do
const browserType = 'mozilla';

if (browserType.startsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}
if (browserType.endsWith('zilla')) {
    console.log('Found zilla!');
  } else {
    console.log('No zilla here!');
  }
  let str = "Please give Rs 1000";//ye jo string k dermayan space hoti ha ye bhi length me 
  //include hoti ha. 
  let ammount = Number.parseInt(str.slice("Please give Rs".length))
  ;//is ka mutlab ye ha k ham ne jo ha 
  //Please give Rs ko is lenght k zariya slice kiya ha means is ki length jo bhi hogi 
  //us se aga ham ne slice kiya ha means Please give Rs k baad jo 1000 wo age ga slice me. 
  //is ooper wala string se ham ne ammount nikalni ha jo k 1000 ha.
  console.log(ammount);//ye jo ammount ha ye string me hogi is no me convert krain ge 
  //Number.parsInt use kr k .
