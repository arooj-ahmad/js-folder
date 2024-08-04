$(document).ready(function () {
    let arr = [];
    $('#save').click(function () {

        let firstname = $('#firstname').val();
        let lastname = $('#lastname').val();
        let fullname = { fAirstname: firstname, lastname: lastname }
        let mydob = $('#mydob').val();
        let fulldob = { day: mydob, month: mydob, year: mydob };
        let address = $('#address').val();
        let city = $('#city').val();
        let district = $('#district').val();
        let state = $('#state').val();
        let country = $('#country').val();
        let fulladdress = { street: address, city: city, district: district, state: state, country: country };
        let email = $('#email').val();
        let contact = $('#contact').val();

        let objarr = {
            fullname,
            fulldob,
            fulladdress,
            email,
            contact
        }

        arr.push(objarr);



    });
    $('#show').click(function () {
        $("#studentTable tbody").empty();
        arr.forEach((item, i)=> {
            $("#studentTable tbody").append("<tr id='row" + i + "'><td>" + item.fullname.firstname + "</td><td>" + item.fullname.lastname + "</td><td>" + item.fulldob.day +  "</td><td>" + item.fulladdress.street + "</td><td>" + item.fulladdress.city + "</td><td>" + item.fulladdress.district + "</td><td>" + item.fulladdress.state + "</td><td>" + item.fulladdress.country + "</td><td>" + item.email + "</td><td>" + item.contact + "</td></tr>");
        });

       
        $("#myform")[0].reset();
        arr.forEach(item => {
            let out = `
        Name: ${item.fullname.firstname}, ${item.fullname.lastname}<br>
        DOB: ${item.fulldob.day}<br>
        Address: ${item.fulladdress.street}, ${item.fulladdress.city}, ${item.fulladdress.district}, ${item.fulladdress.state}, ${item.fulladdress.country}<br>
        Email: ${item.email}<br>
        Contact: ${item.contact}<br>
    `;

           // $('#output').append(out);
        });

    })



}


);