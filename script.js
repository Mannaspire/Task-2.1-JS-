var selectedRow = null;

function showAlert(message, className){
    const div = document.createElement("div");

    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const main = document.querySelector(".main");

    container.insertBefore(div, main);

    setTimeout(()=> document.querySelector(".alert").remove(),3000)
}

function clearFields(){
    document.querySelector("#inputName").value= "";
    document.querySelector("#inputEmail").value= "";
    document.querySelector("#inputAddress").value= "";
    document.querySelector("#inputCity").value= "";
    document.querySelector("#inputState").value= "";
    document.querySelector("#inputPhone").value= "";
    document.querySelector("#inputLang").value= "";
    document.querySelector("#gender").value= "";
    document.querySelector("#inputDate").value= "";
}

document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const inputName = document.querySelector("#inputName").value;
    const inputEmail = document.querySelector("#inputEmail").value;
    const inputAddress = document.querySelector("#inputAddress").value;
    const inputCity = document.querySelector("#inputCity").value;
    const inputState = document.querySelector("#inputState").value;
    const inputPhone = document.querySelector("#inputPhone").value;
    const inputLang = document.querySelector("#inputLang").value;
    const gender = document.querySelector("#gender").value;
    const inputDate = document.querySelector("#inputDate").value;

    if(inputName == ""|| inputEmail == ""|| inputAddress == ""|| inputCity == ""|| inputState == ""|| inputPhone == ""|| inputLang == ""|| gender == ""|| inputDate == ""){
        showAlert("Please fill all the field", "danger")
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list"); 
            const row = document.createElement("tr");

            var data = document.forms["student-form"]["gender"].value;
            console.log(data)

            row.innerHTML=`
                <td>${inputName}</td>
                <td>${inputEmail}</td>
                <td>${inputAddress}</td>
                <td>${inputCity}</td>
                <td>${inputState}</td>
                <td>${inputPhone}</td>
                <td>${inputLang}</td>
                <td>${data}</td>
                <td>${inputDate}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>

                `;

            list.appendChild(row);
            selectedRow = null;
            showAlert("Item added", "success")
        }
        else{
            selectedRow.children[0].textContent = inputName;
            selectedRow.children[1].textContent = inputEmail;
            selectedRow.children[2].textContent = inputAddress;
            selectedRow.children[3].textContent = inputCity;
            selectedRow.children[4].textContent = inputState;
            selectedRow.children[5].textContent = inputPhone;
            selectedRow.children[6].textContent = inputLang;
            selectedRow.children[7].textContent = gender;
            selectedRow.children[8].textContent = inputDate;
            selectedRow=null;
            showAlert("Student info Edited", "success")
        }
        clearFields();
    }
});

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#inputName").value = selectedRow.children[0].textContent;
        document.querySelector("#inputEmail").value = selectedRow.children[1].textContent;
        document.querySelector("#inputAddress").value = selectedRow.children[2].textContent;
        document.querySelector("#inputCity").value = selectedRow.children[3].textContent;
        document.querySelector("#inputState").value = selectedRow.children[4].textContent;
        document.querySelector("#inputPhone").value = selectedRow.children[5].textContent;
        document.querySelector("#inputLang").value = selectedRow.children[6].textContent;
        document.querySelector("#gender").value = selectedRow.children[7].textContent;
        document.querySelector("#inputDate").value = selectedRow.children[8].textContent;
    }
});

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data Deleted", "danger");     
    }
});