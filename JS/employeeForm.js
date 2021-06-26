function getData() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/employees',
        success: function (result) {
            insertRecord(result);
        },
        error: function (result) {
            console.log(result);
        }
    });

    insertRecord = (data) => {
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
                    <img id="1" onclick="onDelete(${data[i].id})" alt="delete" width=20% src="../images/delete-black-18dp.svg">
                    <img id="1" onclick="update(this)" alt="edit" width=20% src="../images/create-black-18dp.svg">
                    </td>
                </tr>`;
            $('#table-display').append(row);
        }document.querySelector(".count").textContent = data.length;
    }
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