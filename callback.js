// function getData(dataid,getnext){
//     setTimeout(()=>{
//         console.log("data",dataid);
        
//         if(getnext){
//             getnext();

//         }

//     },2000);

// }
        
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{

//         })

//     })

// })


// const getpromise =()=>{
//     return new Promise((resolve, reject) => {
//         console.log("i promise with you");
//         resolve("promise fulfil")
        
//     })
// }

// let promise =getpromise();
// promise.then((res)=>{
//     console.log("promise fullfied",res);
// })

// promise.catch((err)=>{
//     console.log("promise rejected",err)
// });

// function getData(dataid){
//     setTimeout(()=>{
//         console.log("data",dataid)
        
//     },2000);

// }

//promice chain

// getData(1)
// .then((res)=>{
//     return getData(2)
// })
//     .then((res)=>{
//         return getData(3)
//     })
//     .then((res)=>{
//             console.log(res);
//         })

// function api(){
//     return Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("reolve promise");
//             resolve("fulfiled");

//         },2000)

//     });
// }

// async function getalldata(){
//     await api();
//     await api();

// }

// function getData(dataid){
//     setTimeout(()=>{
//         console.log("data",dataid)
        
//     },2000);

// }

// //async iffi
// (async function() {
//     await getData(1);
//     await getData(2);
// })();