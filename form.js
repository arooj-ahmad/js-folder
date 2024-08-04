// $(document).ready(function () {
//     let formarr = [];

//     $('#add').click(function () {
//         let id = $('#id').val();
//         let name = $('#name').val();
//         let password = $('#password').val();
//         let dep = $('#department').val();
//         let age = $('#age').val();
//         let formData = {
//             ID: id,
//             Name: name,
//             Password: password,
//             Department: dep,
//             Age: age
//         };

//         formarr.push(formData);
//         $('#id').val('');
//         $('#name').val('');
//         $('#password').val('');
//         $('#department').val('');
//         $('#age').val('');
//         $('#output').empty();
//         console.log(formarr);
//     });
// 8   



//     $('#show').click(function () {
//         console.log(formarr);
//         // let id = $('#id').val();
//         // let name = $('#name').val();
//         // let password = $('#password').val();
//         // let department = $('#department').val();
//         // let age = $('#age').val();


//         // let userEntry = {
//         //     ID: id,
//         //     Name: name,
//         //     Password: password,
//         //     Department: department,
//         //     Age: age
//         // };


//         // formarr.push(userEntry);

//         // $('#id').val('');
//         // $('#name').val('');
//         // $('#password').val('');
//         // $('#department').val('');
//         // $('#age').val('');


//         $('#output').empty();
//         formarr.forEach(entry => {
//             let output = `Name: ${entry.Name},
//            Password: ${entry.Password},
//            Department: ${entry.Department},
//            Age: ${entry.Age}`;
//             $('#output').append(`<p>${output}</p>`);
//         });
//     });


//     $('#reset').click(function () {
//         $('#name').val();
//         $('#password').val();
//         $('#department').val();
//         $('#age').val('');

//         let reset = `Name:,
//                Password:,
//                Department:,
//                Age:`;
//         $('#output').text(reset);

//         formarr = [];
//         console.log("reset array");
//     });

//     $('#update').click(function () {
//         let id = $('input-#id').val();
        
//         if (id === null && index == -1) {
//             alert('Please enter a valid ID and make sure it exists in the array.');
//             return;
//         }
//         let newname= $('#name').val();
//         let newpass = $('#password').val();
//         let newdep= $('#department').val();
//         let index = formarr.findIndex(s =>s.id == id);
//         if (index !== -1) {
//             let newId = $('#id').val();
//             formarr[index].Name = newname;
//             formarr[index].Password = newpass;
//             formarr[index].Department = newdep;            
//             console.log("Data updated ");
//             console.log(formarr);
          
//             if (newId === '') {
//                 return;
//             }
            
//         } else {
//             console.log("No element found");
//         }
//     });
//     $('#del').click(function () {
//         let id = $('#id-input').val();
//         let index = formarr.findIndex(s => s.id == id);
//         if (id === '' ){
//             console.log("provide valid input");

//         }
//          else if(index === -1 ) {
//             console.log("element are not found")
            
//         } else {
//             formarr.splice(index, 1);
//             console.log("element del");
//         }
//     });
//     $("#search").click(function () {
//         let id = $('#id-input').val();
//         let index = formarr.findIndex(s => s.id == id);
//         if (id === '' && index === -1) {
//             console.log("element not found");
            
//         } else {
//             let info = '';
//             formarr.forEach(entry => {
//                 if (entry.id === id) {
//                     info = `Name: ${entry.Name},
//                             Password: ${entry.Password},
//                             Department: ${entry.Department},
//                             Age: ${entry.Age}`;
//                 }
//                 $('#output').html(info);
//             });
//             console.log("element search");
//         }
//     });




   
    
// });

