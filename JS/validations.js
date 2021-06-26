OnFormSumbit = () => {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("number").value;
    let salary = document.getElementById("salary").value;
    let city = document.getElementById("city").value;

    let firstNameCheck = validation(firstName, "firstNameError", "Please Enter First Name")
    let lastNameCheck = validation(lastName, "lastNameError", "Please Enter Last Name")
    let emailCheck = validation(email, "emailError", "Please Enter Email")
    let contactCheck = validation(contact, "numberError", "Please Enter Mobile No.")
    let salaryCheck = validation(salary, "salaryError", "Please Enter Salary")
    let cityCheck = validation(salary, "cityError", "Please Enter City")

    if (firstNameCheck && lastNameCheck && emailCheck && contactCheck && salaryCheck && cityCheck) {
        let userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            salary: salary,
            city: city
        }   
        addEmployee(userData);
    }
}


validation = (value, idError, msg) => {
    if(value.length < 1) {
        document.getElementById(idError).innerText=msg
        return false; 
    } else {
        document.getElementById(idError).innerText= ""
        return true;
    }
}


addEmployee = (data) => {
    ajaxCalling('post', 'http://localhost:3000/employees', data)
}
ajaxCalling = (type, url, data) => {
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: function (result) {
            window.location.href="../html/employeeDashboard.html"
        },
        error: function (result) {
            console.log(result);
        }
    })
}