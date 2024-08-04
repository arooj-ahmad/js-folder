// const student={
   
//     fname:"arooj",
//     lname:"ahmad",
//     marks:85,
//     fullname:function(){
//         this.fname+this.lname;
//     }
// }

// class toyata{
//     constructor (brand,mileage){
//         console.log("creating new object")
//         this.brand=brand;
//         this.mileage=mileage;

//     }
//     start(){
//         console.log("start");

//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let audi= new toyata("audi",1000);
// console.log(audi);

// class parent{
//     hello(){
//         console.log("hello");
//     }

// }

// class child extends parent{

// }

// let obj=new child;

// class person{

//     constructor(name){
//         console.log("constuctor")
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");

//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class eng extends person{

//    constructor(name){
//     console.log("constructor of child class");
//     super(name);

//    }
    
//     work(){
//         super.eat();
//         super.sleep();
//         console.log("working");
//     }
// }

// let aroojobj=new eng("arooj");

// // practice question

// let data="secert information"
// class user{
//     constructor(name,email){

//         this.name=name;
//         this.email=email;
        
//     }

//     viewdata(){

//         console.log("data = " ,data)

//     }
// }




// class admin extends user{

//     constructor(name,email){
//         super(name,email);
//     }

//     editData(){
//         data="new data";
//     }

// }
// let userobj=new user("arooj","aroojahmad35@gmail.com");
// let adminobj=new user("aroojahmad","arooj35@gmail.com");