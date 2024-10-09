import EmployeeData from "./EmployeeData.js";

class EmployeeManagement {
    constructor() {
        this.employeeData = new EmployeeData();
        this.employeeList = this.employeeData.getList();
    }

    getListHtml(employees = []) {
        if (!employees.length) {
            employees = this.employeeList;
        }

        if (!employees.length) {
            return "";
        }

        let listHtml = ``;
        employees.forEach((employee) => {
            listHtml += `<tr>`;
            listHtml += `<td>${employee.username}</td>`;
            listHtml += `<td>${employee.name}</td>`;
            listHtml += `<td>${employee.email}</td>`;
            listHtml += `<td>${employee.workDay}</td>`;
            listHtml += `<td>${this.getPositionName(employee.position)}</td>`;
            listHtml += `<td>${employee.totalSalary}</td>`;
            listHtml += `<td>${employee.employeeType}</td>`;
            listHtml += `<td>
                            <button 
                                class="btn btn-info btn-edit" 
                                id="edit-${employee.username}" 
                                data-username="${employee.username}"
                            >Sửa</button>
                            <button 
                                class="btn btn-danger btn-delete" 
                                id="delete-${employee.username}" 
                                data-username="${employee.username}">Xoá</button>
                        </td>`;
            listHtml += `</tr>`;
        });

        return listHtml;
    }

    add(employee) {
        this.employeeList.push(employee);
        this.employeeData.setList(this.employeeList);
    }

    update(username, employee) {
        let index = this.getIndexEmployeeByUserName(username);
        let emqloyeeUpdate = this.employeeList[index];
        emqloyeeUpdate.username = employee.username;
        emqloyeeUpdate.name = employee.name;
        emqloyeeUpdate.email = employee.email;
        emqloyeeUpdate.workDay = employee.workDay;
        emqloyeeUpdate.basicSalary = employee.basicSalary;
        emqloyeeUpdate.position = employee.position;
        emqloyeeUpdate.workTimeOnMonth = employee.workTimeOnMonth;
        emqloyeeUpdate.totalSalary = employee.totalSalary;
        emqloyeeUpdate.employeeType = employee.employeeType;
        this.employeeList[index] = emqloyeeUpdate;
        this.employeeData.setList(this.employeeList);
    }

    getEmployeeByUserName(username) {
        if (!this.employeeList) return {};

        return this.employeeList.find(
            (employee) => employee.username === username
        );
    }

    checkExistUsername(username) {
        if (!this.employeeList) return false;

        return this.employeeList.some(
            (employee) => employee.username === username
        );
    }

    filterEmployee(searchValue) {
        if (!this.employeeList) return [];

        return this.employeeList.filter((employee) => {
            return employee.employeeType.includes(searchValue);
        });
    }

    getIndexEmployeeByUserName(username) {
        if (!this.employeeList) return -1;

        return this.employeeList.findIndex(
            (employee) => employee.username === username
        );
    }

    deleteByUsername(username) {
        this.employeeList = this.employeeList.filter(
            (employee) => employee.username !== username
        );
        this.employeeData.setList(this.employeeList);
    }

    getPositionName(position) {
        if (position === "head-of-division") {
            return "Trưởng phòng";
        }

        if (position === "manager") {
            return "Giám đốc";
        }

        return "Nhân viên";
    }

    caculatorTotalSalary(basicSalary, position) {
        let totalSalary = basicSalary * 1;

        if (position === "head-of-division") {
            totalSalary = basicSalary * 2;
        }

        if (position === "manager") {
            totalSalary = basicSalary * 3;
        }

        return totalSalary;
    }

    classificationEmployee(workTimeOnMonth) {
        if (workTimeOnMonth >= 160) {
            return "Nhân viên khá";
        }

        if (workTimeOnMonth >= 176) {
            return "Nhân viên giỏi";
        }

        if (workTimeOnMonth >= 192) {
            return "Nhân viên xuất xắc";
        }

        return "Nhân viên trung bình";
    }
}

export default EmployeeManagement;
