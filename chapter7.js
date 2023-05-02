//jo kuch ham ne kiya ha neecha ham ne sara perform kr k dakha ha.
//     WALKING THE DOM       //
//jab bhi ham aik html page ko access krta hain.aur is k bohat se elements ko js se 
//manipulate krna ki koshish krta hain.To tab hamain dom manipulation krna perta ha. 
//HTML id jo ha wo multiple elemenets pr ham same id likh sakta hain but aik hi element pr
//ham sirf aik hi id lga sakta hain.jab k classes multiple lga sakta hain.aur ye ham ne prove
//kr k dakh liya ha. 

//Dom tree ka mutlab ye ha k html ko aik js object me convert kr diya gya ha. aur is ko ham
//aik object k tor pr use kr sakta hain.Tree ka mutlab ye ha k hamara pass sab se pehela 
//html tag ha phir sara tag us k under ata hain.
//Ham 3 terah k html nodes 90 % dakhain ga.jo k derj zail hain.node means collection.
//(1):text nodes;
//ksi bhi tag k under jo text hota ha us ko text node kehta hain
//title k under tax hota ha is liya is ko text node khain ge title k under wla text ko text
//node khain ge. aur kisi element k under jitni bhi space hoti ha wo bhi text node ha
//aur is ko ham particular properties jo ham ne neecha define ki hain un k saath Element use
//kr k khatam kr sakta hain.
//jab k title aik element node ha.
//text node k under ham kuch bhi nai dal sakta text node aik title k under ka jo text ha
//wo ha title jo ha wo text node nai ha title aik element node ha. text node k under
//ham kuch bhi nai daal sakta . jab k ham dakhta hain html root k under ham bohat element dal sakta hain
//isi terah baqi tags k under bhi ham bohat kuch daal sakta hain.
//(2):element nodes;
//jitna bhi html elements hain un ko element nodes kehta hain.
//(3):comment nodes;
//aur jo hamara html comments hain in ko comment nodes kehta hain.

//Aik html page k under aik html hota ha jo k  root hota ha.aur is k under head aur body
//children hota hain body aur head k under mazeed children hota hain.

//Auto Correction//
//means ham ne kuch ulta seedha likh diya ha html me means k ham ne aik opening tag lgaya 
//but closing tag nai lgaya.to browser automatically jo ha is ko correct kr de ga console 
//me menas hamain bachana ki koshish kra ga. aur ye ham ne kr k dakh liya ha.
//document.documentElement se hamara HTML element ata ha aur html k under jitna bhi tags 
//hain wo bhi. 
//.document.body se body aur document.
//head se head tag ae ga.aur in sab k under jo kuch bh hoga wo bhi ae ga.
//document.title="hello" ham is terah console me changing kr sakta hain but server side pr
//nai kr sakta  to is terah websites hi destroy hojain. koi bhi un ko change kr le but ye
//sirf usi k browser me hota ha jo us ko change krta ha aur kisi k browser me nai hota ha
//ku k wo server pr change nai hua ha.
//document.title title tag nai return krta jab k wo string deta ha.ye 
//Ham ne object me perha k ager property change krni ya dakhni ha to ham dot lga kr dakhta hain
//aur bracket lga kr bhi object ko dakh sakta hain same to same ham ne yaha bhi asa hi kiya
//ku k ham ne ooper perha k ham ne html ko js object me convert kr diya ha.dom manipulation 
//k liya . aur same to same jsa ham ne object ko perha tha k ksa is ko use krna ha wsa hi 
//yaha pr krna ha.
//aur ham ne ager kisi element ko select krna ha to ham [] index bhi use kr sakta hain.
//ku k ye html jo k object me convert hoi ye iterable ha means yaha aik se zayada element tag
//hain.


//              Accessing children  of an element                 //
//Ab ham perhain ge children kya hota hain aur kis terah aik element k children ko phir is ki
//sibling ko aur phir parent ko access kr sakta hain.
//baqi ham ne html file me details likhi hain is ki.//
//html file details se aga.
console.log(document.body.firstChild);//is ka answer text node ae wja html file me likhi ha.
console.log(document.body.lastChild);//is ka answer script ae ga jab k end pr script se pehla
//console.log(document.body.childNodes);//is se hamain sari childNodes millain gi
//</p>//ye jo child nodes hain ye array jsa nazar araha hoga but ye array jsa nai ha aur na
//hi ham is pr array k methods and kuch bhi array jsa nai lga sakta hain.but ye sirf aik
//node list ha.
//(IMPORTANT)Aur ham ne perha tha k ager koi cheez array ki terah nazar ae to ham us ko 
//Array.from se array me convert krain ge. aur ye ham ne peecha likha ha.Is liya ham ab
//is child node ko Array.from se array me covert kain ge.
let arr = Array.from(document.body.childNodes);
console.log(arr);//is terah childNodes array me convert hogae.
//Html collection ko bhi jo ham aga perhain ge array me convert kain ge ku k ye bhi array
//k tor pr nazar ata hain.Html collection ko bhi ham Array.from se array me convert krain ge.

//element.childNodes[0]===element.firstChild//ye asaan ha
//element.childNodes[element.childNodes.length-1]===element.lastChild//ye length-1 is liya
//kiya ku k index 0 se start hota ha aur lenth jo ha 1 se is liya total length me se -1 kiya
//ta k last child ajae.baqi asaan ha smjh ajae gi.
//</div>


///////////////////////////////////////////////////////////////////////////////////
//PARENT AND SIBLINGS //
//Dom collection properties//
//(i)They are read only;Means ham in ko change nai kr sakta hain.
//ager ham console pr jain to wha kabhi kubar $0 hota ha is ka mutlab ye ha k ager ham console
//me $0 likhain to wo element ajae ga jis pr ye $0 tha aur ham $0 ko likh kr console me kisi
//aur element ko select krain to wo ajae ga aur phir ager ham $1 likhain to pehla wala 
//element ajae ga jo pehla $0 se aya tha.
//(ii)They are iterable using for of loop.Means iterate krna k liya sirf ham for of loop use
//krain ge for in nai aur ye proof ha.
console.log(document.documentElement.children[0].nextElementSibling);//pehla bhi ham ne ooper
//likha k html ko select krna k liya ham documentElement likhta hain.aur ham ne tarteeb se
//krna ha select . parent se element.nextElementSibling me Element text nodes ko khata krta ha
//aur ye ham ne poorani files me perha ha.

//Ab ager ham ne parent ko lana ha to parent parentNode me available hota ha
console.log(document.documentElement.parentNode);//is terah html ka parent hamain mil jae ga.jo
//k document hoga html ka parent.jab k parentNode hr terah ka node jo ha return krta ha
//chaha wo element ho ya na.yaha parentNode hr terah ka node chaha wo text node ho hr terha
//ka node return krta ha.
console.log(document.documentElement.parentElement)//yaha null ae ga ku parentElement sirf
//wo cheez return krta ha jo element ho aur doctype html aik element nai hai element jo hain
//html elment hain.jab k parentElement me aik valid html element hona chahya.
console.log(document.body.parentElement);//ab ku k html aik element ha is liya
//yaha ab html ae ga.
console.log(document.body.parentNode);//bas parentElement aur parentNode ye dono parent hi deta
//hain jo particular parent ha dono wohi deta hain but sirf parentElement jo ha wo doctype 
//jo k html ka parent element ha us ki jagga null de ga ku k ye aik html element nai ha ye
//document ki type browser ko btata ha.
//ye jitna bhi perha ham ne in me text node bhi include hota ha is text node ko khatam krna 
//k liya ham Element use krta hain jsa k ham na ooper nextElementSibling use kiya jis me 
//Element ki waja se sirf element hi ae ga text node khatam hojae ga.jab bhi ham ne is terah
//k method use krna hain next sibling ,previous sibling , firstChild,lastChild to ham in me
//Element use krta hain ta k in me textnode na ae hamain sirf aik particular element mila.
//aur ham childNodes me bhi element use krta hain ta k text node na ae.aur comment bhi na ae.

//DIFFERENCE BETWEEN CHILD NODES AND CHILDREN//
//childNodes returns child nodes (element nodes, text nodes, and comment nodes).
// children returns child elements (not text and comment nodes).

let gree = document.body.children[0];
// console.log(gree.childNodes);is se div k child nodes agai
console.log(gree.lastChild);
//Table Navigation in JS//
//(1)table.rows(collection of tr elements)
//(2)table.caption(reference to <caption>)
//(3)table.thead(refernece to <thead>)
//(4)table.tfoot(reference to <tfoot>.)
//(5)table.tbodies(collection of <tbody>elements)
//(6)tbody.rows(collection of <tr>inside)
//(7)tr.cells(collection of td and th)
//(8)tr.sectionRowIndex(inedex of tr inside enclosing element)
//(9)tr.rowIndex(Row number starting from zero)
//(11)td.cellIndex(no of cells inside enclosing <tr>)

//(Important)Kisi bhi html element ko lana ha to ham sab se pehla us ko select krta  hain.//
let table = document.body.firstElementChild;
console.log(table);//yaha neecha rows likhna zaroori ha row nai werna undefine ae ga.
console.log(table.rows);//is se hamain table ki sari rows mil jain means tr gi in the form of 
//html collection;html collection bhi array k tor pr nazar ata ha but array nai ha aur na 
//hi ham array ka koi method is pr apply kr sakta hain is liya ham ager array me is ko 
//convert krna chahta hain to ham Array.from use krain ge.
console.log(table.caption);
console.log(table.tHead);
console.log(table.tFoot);//ku k table me tFoot nai ha is liya null ae ga.
console.log(table.tHead.firstElementChild);
console.log(table.tBodies);//ye bhi html collection me ae ga. 
let tbody = table.tBodies[0];//is terah ham aik tbody select krta hain
console.log(tbody.rows);
let row = table.rows[0];
console.log(row.cells);//is terah ye hamain th aur td de ga ham ne pehla tr select kiya aur
//pehla tr me sirf th ha is liya th hi ae ga.
console.log(row.sectionRowIndex);//is ka mutlab pehli row ka index kya ha wo 0 ha.
console.log(row.rowIndex);//is ka mutlab bhi pehli row ka index kya ha wo 0 ha.
let td = row.cells[1];
console.log(td.cellIndex);//is ka answer 1 ae ga ku k ham ne td pehla index pr ata ha is liya 
//is ka answer 1 aya ha aur ham ne slect bhi index 1 kr k isa kiya ha.
//koi aik ham ne element lana ha to ham whole me se index lga kr us ko select krain ge.



/////////////////////////////////////////////////////////////////
