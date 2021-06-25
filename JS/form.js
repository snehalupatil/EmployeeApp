
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["email"] = document.getElementById("email").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}


function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == "") {
        isValid = false;
        document.getElementById("firstNameError").innerText = "Please Enter First Name"
    } else {
        isValid = true;
        document.getElementById("firstNameError").innerText = ""
        
    }

    if (document.getElementById("lastName").value == "") {
        isValid = false;
        document.getElementById("lastNameError").innerText = "Please Enter Last Name"
    } else {
        isValid = true;
        document.getElementById("lastNameError").innerText = ""
        
    }

    if (document.getElementById("salary").value == "") {
        document.getElementById("salaryError").innerText = "Please Enter Salary"
    } else {
        isValid = true;
        document.getElementById("salaryError").innerText = ""
        
    }

    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailError").innerText = "Please Enter Email"
    } else {
        isValid = true;
        document.getElementById("emailError").innerText = ""
        
    }

    if (document.getElementById("city").value == "") {
        isValid = false;
        console.log("Hello ")
        document.getElementById("cityError").innerText = "Please Enter City"
    } else {
        isValid = true;
        document.getElementById("cityError").innerText = ""
        
    }
    return isValid;
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
            console.log(result);
        },
        error: function (result) {
            console.log(result);
        }
    })
}