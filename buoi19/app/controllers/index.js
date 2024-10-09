import Employee from "../models/Employee.js";
import EmployeeMenagement from "../models/EmployeeManagement.js";
import Validation from "../models/Validation.js";

window.onload = () => {
    let employeeManagement = new EmployeeMenagement();

    // Render employee listing
    renderList();

    let form = document.getElementById("employee-form");
    let username = form.elements["username"],
        name = form.elements["name"],
        email = form.elements["email"],
        password = form.elements["password"],
        workDay = form.elements["work-day"],
        basicSalary = form.elements["basic-salary"],
        position = form.elements["position"],
        workTimeOnMonth = form.elements["work-time"];

    // Edit employee
    let btnconfirmEdit = document.querySelector("#btnCapNhat");

    function showEditModal(e) {
        // Update modal title
        document.getElementById("header-title").innerText = "Sửa nhân viên";
        document.getElementById("btnThemNV").style.display = "none";
        btnconfirmEdit.style.display = "block";

        let currentUsername = e.currentTarget.getAttribute("data-username");
        let currentEmployee =
            employeeManagement.getEmployeeByUserName(currentUsername);

        if (!currentEmployee) {
            return;
        }

        // Apply employeeData to input value
        form.elements["origin-username"].value = currentEmployee.username;
        username.value = currentEmployee.username;
        username.setAttribute("disabled", "disabled");
        name.value = currentEmployee.name;
        email.value = currentEmployee.email;
        password.value = currentEmployee.password;
        workDay.value = currentEmployee.workDay;
        basicSalary.value = currentEmployee.basicSalary;
        position.value = currentEmployee.position;
        workTimeOnMonth.value = currentEmployee.workTimeOnMonth;

        showModal();
    }

    btnconfirmEdit.onclick = saveEmployee;

    // Add new employee
    let btnconfirmAdd = document.getElementById("btnThemNV");
    document.getElementById("btnThem").onclick = function () {
        document.getElementById("header-title").innerText = "Thêm nhân viên";
        btnconfirmAdd.style.display = "block";
        btnconfirmEdit.style.display = "none";
        resetForm();
        username.removeAttribute("disabled");
    };

    btnconfirmAdd.onclick = saveEmployee;

    // Save employee
    function saveEmployee() {
        if (
            !validateForm(
                username.value,
                name.value,
                email.value,
                password.value,
                workDay.value,
                basicSalary.value,
                position.value,
                workTimeOnMonth.value
            )
        ) {
            return;
        }

        let totalSalary = employeeManagement.caculatorTotalSalary(
            basicSalary.value,
            position.value
        );

        let employeeType = employeeManagement.classificationEmployee(
            workTimeOnMonth.value
        );

        let employee = new Employee(
            username.value,
            name.value,
            email.value,
            password.value,
            workDay.value,
            basicSalary.value,
            position.value,
            workTimeOnMonth.value,
            totalSalary,
            employeeType
        );

        if (form.elements["origin-username"].value) {
            employeeManagement.update(
                form.elements["origin-username"].value,
                employee
            );
        } else {
            employeeManagement.add(employee);
        }

        renderList();
        resetForm();
        closeModal();
    }

    // Filter employee
    let searchInput = document.getElementById("search-input");
    searchInput.oninput = filterEmployee;
    function filterEmployee() {
        let searchValue = searchInput.value;
        let filteredList = employeeManagement.filterEmployee(searchValue);
        let listElement = document.getElementById("tableDanhSach");
        listElement.innerHTML = employeeManagement.getListHtml(filteredList);

        if (document.getElementById("tableDanhSach").children.length) {
            let editButtons = document.querySelectorAll("button.btn-edit");

            for (let editBtn of editButtons) {
                editBtn.addEventListener("click", showEditModal);
            }

            let deleteButtons = document.querySelectorAll("button.btn-delete");
            for (let deleteButton of deleteButtons) {
                deleteButton.addEventListener("click", deleteEmployee);
            }
        }
    }

    function validateForm(
        username,
        name,
        email,
        password,
        workDay,
        basicSalary,
        position,
        workTimeOnMonth
    ) {
        resetValidate();
        let valid = true;

        const validation = new Validation();

        //Validate username
        let usernameValidated = validation.usernameValidate(username);
        if (!usernameValidated.valid) {
            const errorElem = document.getElementById("tb-username");
            errorElem.innerText = usernameValidated.message;
            errorElem.style.display = "block";
            valid = false;
        }

        if (!form.elements["origin-username"].value) {
            if (employeeManagement.checkExistUsername(username)) {
                const errorElem = document.getElementById("tb-username");
                errorElem.innerText = "Tài khoản đã tồn tại";
                errorElem.style.display = "block";
                valid = false;
            }
        }

        // Validate name
        let nameValidated = validation.nameValidate(name);
        if (!nameValidated.valid) {
            const errorElem = document.getElementById("tb-name");
            errorElem.innerText = nameValidated.message;
            errorElem.style.display = "block";
            valid = false;
        }

        // Validate email
        let emailValidated = validation.emailValidate(email);
        if (!emailValidated.valid) {
            const errorElem = document.getElementById("tb-email");
            errorElem.innerText = emailValidated.message;
            errorElem.style.display = "block";
            valid = false;
        }

        // Validate password
        let passwordValidated = validation.passwordValidate(password);
        if (!passwordValidated.valid) {
            const errorElem = document.getElementById("tb-password");
            errorElem.innerText = passwordValidated.message;
            errorElem.style.display = "block";
            valid = false;
        }

        // Validate work day
        let workDayValidated = validation.workDayValidate(workDay);
        if (!workDayValidated.valid) {
            const errorElem = document.getElementById("tb-work-day");
            errorElem.innerText = workDayValidated.message;
            errorElem.style.display = "block";
            valid = false;
        }

        // Validate basic salary
        let basicSalaryValidated = validation.basicSalaryValidate(basicSalary);
        if (!basicSalaryValidated.valid) {
            const errorElem = document.getElementById("tb-basic-salary");
            errorElem.innerText = basicSalaryValidated.message;
            errorElem.style.display = "block";
            valid = false;
        }

        // Validate position
        let positionValidated = validation.positionValidate(position);
        if (!positionValidated.valid) {
            const errorElem = document.getElementById("tb-position");
            errorElem.innerText = positionValidated.message;
            errorElem.style.display = "block";
            valid = false;
        }

        // Validate work time
        let workTimeValidated = validation.workTimeValidate(workTimeOnMonth);
        if (!workTimeValidated.valid) {
            const errorElem = document.getElementById("tb-work-time");
            errorElem.innerText = workTimeValidated.message;
            errorElem.style.display = "block";
            valid = false;
        }

        return valid;
    }

    function renderList() {
        let listElement = document.getElementById("tableDanhSach");
        listElement.innerHTML = employeeManagement.getListHtml();
        if (document.getElementById("tableDanhSach").children.length) {
            let editButtons = document.querySelectorAll("button.btn-edit");

            for (let editBtn of editButtons) {
                editBtn.addEventListener("click", showEditModal);
            }

            let deleteButtons = document.querySelectorAll("button.btn-delete");
            for (let deleteButton of deleteButtons) {
                deleteButton.addEventListener("click", deleteEmployee);
            }
        }
    }

    function deleteEmployee(e) {
        if (
            confirm("Bạn có chắc chắn muốn xoá nhân viên này không?") === false
        ) {
            return;
        }

        let username = e.currentTarget.getAttribute("data-username");
        employeeManagement.deleteByUsername(username);
        renderList();
    }

    function resetValidate() {
        const resetElements = [
            "username",
            "name",
            "email",
            "password",
            "work-day",
            "basic-salary",
            "position",
            "work-time",
        ];

        for (let element of resetElements) {
            const elementReset = document.getElementById("tb-" + element);
            elementReset.innerText = "";
            elementReset.style.display = "hide";
        }
    }

    function resetForm() {
        form.reset();
    }

    function showModal() {
        $("#myModal").modal("show");
    }

    function closeModal() {
        $("#myModal").modal("hide");
    }
};
