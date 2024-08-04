// console.log("arooj");
// const product={

//     fullName : "arooj",
//     rating : 34,
//     offer: 45,
//     price: 56,

// };
// console.log(product);
// let val = prompt("Enter a number:");
// let arr = [];
// //let val = 300;
// for(let i = 1; i<= val ;  i++) {

//     arr.push(i);
// }
// console.log(arr);



//   let a=prompt("enter your name:")  
//   console.log(a);

// function myfunc() {

//     let studentinfo = {
//         name: prompt("enter the name:"),
//         rollNumber: prompt("enter your rollNumber"),
//         email: prompt("enter your email:"),
//         fatherName: prompt("enter your father name:"),

//     };
//     return studentinfo;

// }

// function display(data) {
//     console.log(data);

// }

// data = myfunc();

// display(data)

// function myfunc() {

//     let studentinfo = {
//         name: prompt("enter the name:"),
//         rollNumber: prompt("enter your rollNumber"),
//         email: prompt("enter your email:"),
//         fatherName: prompt("enter your father name:"),

//     };
//     return studentinfo;

// }

// data = myfunc();
// function display(data){

//     console.log(data);

// }
// display(data);

// let heading =document.querySelector("h2");
// console.dir(heading.innerText);
// heading.innerText= heading.innerText + "apna college";


//  let arr = [1,2,3,4];
// let person = {
//     name: {
//         firstName : prompt("enter your first name"),
//         lastName : prompt("enter your last name"),
//     },
//     address: {
//         city :prompt("enter your city:"),

//          country:{
//             nameC:prompt("enter country name"),
//             area:{
//                 areaname: prompt("enter your area:"),
//             },
//        },
//     },
//     latlong :{
//         lat : prompt("Enter your lat:"),
//         log: prompt("Enter your log:"),
//     },
// };
// let {name , address, latlong} = person ;
// console.log(name ,address , latlong);
// console.log(person);

// console.log(JSON.parse(JSON.stringify(person)));
// let [a,b,c,d] = arr ;
// console.log(a,b,c,d);

// function searchdepth(p){

//     for (let key in p ){

//         if(typeof p[key]==="object"){
//             searchdepth(p[key]);

//         }
//         else{
//             console.log(p[key]);
//         }
//     }

// }
// searchdepth(person);

// let butn = document.createElement("button");
// butn.innerText = "click me";
// console.log(butn);

// let div=document.querySelector("div");
// div.after(butn);


// let para =document.createElement("p");
// para.innerText="my name is Arooj. i study in comsats university islamabad by sahiwal campus.";
// console.log(para);

// let h2 = document.querySelector("h2");
// h2.after(para);

// let head = document.querySelector("div");
// head.innerText = head.innerText + "apna college";
// console.log(head);


// let butn = document.createElement("button");
// butn.innerText ="click me!";
// butn.style.backgroundColor = "red";



// let body = document.querySelector("body");
// body.prepend(butn);

// let div = document.querySelector("div");
// console.log(div);

// let attr = div.getAttribute("class");
// console.log(attr);

// let para = document.querySelector("p");
// console.log(para);

// let val = para.getAttribute("id");
// console.log(val);

// let newheading = document.createElement("h1");
// newheading.innerHTML = "<i>my  name is arooj</i>";
// console.log(newheading);

// let val = document.querySelector("body");
// val.prepend(newheading);
// console.log(val);

// let para = document.querySelector("p");
// para.remove();

// let btn = document.createElement("button");
// btn.innerText ="click me!";
// console.log(btn);

// btn.style.backgroundColor ="red";
// btn.style.color="white";

// let b = document.querySelector("div");
// b.after(btn);
// console.log(b);

// let para = document.querySelector("p");
// // para.getAttribute("class");
// // para.setAttribute("class", "helloclass");

// para.classList.add ("content");
// const obj ={
//     name: "arooj",
// };

// let copyobj = Object.assign({},obj);
// copyobj.name="ahmad";
// console.log("original array:",obj);
// console.log("copy object",copyobj);


// let arr =[1,2,3,4,5,6,7];
// let shallow = arr.slice();
// shallow.push(9);
// console.log(arr);
// console.log(shallow);

// let original={
//     a: 34,
//     b: 56,
//     c: 12,

// };
// let shallowcopy = Object.assign({},original);
// shallowcopy.b=14;
// console.log(original);
// console.log(shallowcopy);

// let original = {
//     name: "arooj",
//     age: 12,

// };
// let shallow ={...original};
// shallow.age=20;
// console.log(original);
// console.log(shallow);

// let original={
//     a: 23,
//     b:{
//         c:23,
//         d:45,
//     },
//     e: 60,

// };

// let deep=JSON.parse(JSON.stringify(original));
// console.log(original);
// original.b.c=20;
// console.log(deep);

// let original ={
//     studentinfo:{
//         name: prompt("enter your name:"),
//         age:prompt("enter your age:"),

//     },
//     address:{
//         city:prompt("enter your city:"),
//         country:prompt("enter your country:"),
//     },

// };
// let deepcopy= JSON.parse(JSON.stringify(original));
// deepcopy.address.country="pakistan";
// console.log(original);
// console.log(deepcopy);

// let org_arr =[1,2,3,
//     [4,5,6],
//     [7,8,9],
// ];
// let deepcopy = JSON.parse(JSON.stringify(org_arr));
// console.log(org_arr);
// org_arr.push(10);
// console.log(deepcopy);

// let arr_obj=[
//     {
//         name:[{
//            firstname: prompt("enter your first name:"),
//            secondname: prompt("enter your secondname:")

//     }],
//         hobbies:[{
//             h:prompt("enter your hobbies:")}

//         ]
//     } 
// ]

// let deepcopy =JSON.parse(JSON.stringify(arr_obj));
// console.log(arr_obj);
// deepcopy[0].hobbies[0].h="cs";
// deepcopy[0].name[0].secondname="ahmad";
// console.log(deepcopy);
// let emp ={

//     empName:"arooj",
//     empid:"12",

// };


// let shallowcopy = emp;
//  shallowcopy.empid = 1;
// console.log(emp);
// console.log(shallowcopy);

// let arr_obj_arr = [{

//     names: [{
//         namefirst: "arooj",


//     }, {

//         lastname: "ahmad"
//     }],
//     hobbies:[ {
//         hobbiesname: "batball",

//     },],
//     age: [{
//         month: 12,
//         year: 2023,
//     }],
// }]

// console.log(arr_obj_arr);
// let sha = JSON.parse(JSON.stringify(arr_obj_arr));
// sha[0].names[1].lastname = "ajmal";

// let person = [
//     {
//         name: { firstname: "arooj", lastname: "ahmad" },
//         age: { month: 12, year: 2023 },
//         department: { dep: "cs" }
//     },
//     {
//         name: { firstname: "saira", lastname: "bahir" },
//         age: { month: 2, year: 2003 },
//         department: { dep: "se" }

//     },
//     {
//         name: { firstname: "arooj", lastname: "saddiqa" },
//         age: { month: 12, year: 2023 },
//         department: { dep: "cs" },
//     },
// ]
// const uniqueNames = [...new Set(person.map((p) => p.name.firstname))];

// console.log(uniqueNames);

// let uniqueNames = person.filter((item,index)=>{
//     person.indexof(item)==index;
// });
// console.log(uniqueNames);

// let btn1 = document.querySelector("#btn");

// btn1.onclick =() =>{

//     console.log("button was click");
//     let a= 5;
//     a++;
//     console.log(a);

// }

// let box =document.querySelector(".div1");

//  box.onmouseover=()=>{
//     console.log("you are inside the div");
// }

// let btn = document.querySelector("#btn");
// btn.onclick=(evt)=>{ 

//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX);
//     console.log(evt.clientY);

// }

//let btn1=document.querySelector("#btn");
// btn1.addEventListener("click",()=>{

//     console.log("button was clicked--handler1");

// })
// btn1.addEventListener("click",()=>{

//     console.log("button was clicked--handler2");

// })
// const handler3=()=>{

//     console.log("button was clicked--handler3")

// };

// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{

//     console.log("button was clicked--handler4");

// })

// btn1.removeEventListener("click",handler3);


//practice question 
// let curr="light";
// let btn= document.querySelector("#btn1");
// btn.addEventListener("click",()=>{
//     if(curr=="light"){
//         curr="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//     curr="light";
//     document.querySelector("body").style.backgroundColor="pink";

// }
// console.log(curr);
// });

// let curr="light";
// let body=document.querySelector("body");
// let btn= document.querySelector("#btn1");
// btn.addEventListener("click",()=>{
//     if(curr=="light"){
//         curr="dark";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     else{
//     curr="light";
//     body.classList.add("dark");
//     body.classList.remove("light")
// }
// console.log(curr);
// });

