function getData() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/employees',
        success: function (result) {
            insertRecords(result);
        },
        error: function (result) {
            console.log(result);
        }
    });

    insertRecords = (data) => {
        let row = "";
        for (let i = 0; i < data.length; i++) {
            row =
                `<tr>
                    <td>${data[i].firstName}</td>
                    <td>${data[i].lastName}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].contact}</td>
                    <td>${data[i].salary}</td>
                    <td>${data[i].city}</td>
                    <td>
                    <img onclick="onDelete(${data[i].id})" alt="delete" width=20% src="../images/delete-black-18dp.svg">
                    <img id="btn" src="../images/create-black-18dp.svg" width=20% type="button" onclick="update('${data[i].firstName}','${data[i].lastName}','${data[i].email}','${data[i].contact}','${data[i].salary}','${data[i].city}')"> 
                    </td>
                </tr>`;
            $('#table-display').append(row);
        }document.querySelector(".count").textContent = data.length;
    }
}



function postData() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let city = document.getElementById("city").value;
    let contact = document.getElementById("contact").value;
    let salary = document.getElementById("salary").value;
    let email = document.getElementById("email").value;

    let userData = {
        firstName: firstName,
        lastName: lastName,
        city: city,
        contact: contact,
        salary: salary,
        email: email
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/employees',
        data: userData,
        success: function (result) {
            resetFields();
            window.location.href = "../html/employeeDashboard.html";
        },
        error: function (result) {
            console.log(result);
        }
    });

    resetFields = () => {
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("city").value = '';
        document.getElementById("contact").value = '';
        document.getElementById("salary").value = '';
        document.getElementById("email").value = '';
    }
}
var modal = document.getElementById("myModel");
function update(firstName, lastName, city, contact, salary, email) {
    modal.style.display = "block";
    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;
    document.getElementById("city").value = city;
    document.getElementById("contact").value = contact;
    document.getElementById("salary").value = salary;
    document.getElementById("email").value = email;
}
function putData() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let city = document.getElementById("city").value;
    let contact = document.getElementById("contact").value;
    let salary = document.getElementById("salary").value;
    let email = document.getElementById("email").value;

    let putUserData = {
        firstName: firstName,
        lastName: lastName,
        city: city,
        contact: contact,
        salary: salary,
        email: email
    }

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/employees/' + id,
        data: putUserData,
        success: function (result) {
            getData();
        },
        error: function (result) {
            console.log(result);
        }
    });
}

const onDelete = (id) => {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/employees/' + id,
        success: function (result) {
            console.log(result)
            window.location.reload();
        },
        error: function (result) {
            console.log(result);
        }
    });
} 

