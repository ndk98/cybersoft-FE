class EmployeeData {
    constructor() {
        this.localStorage = localStorage;
    }

    getList() {
        let employeeString = this.localStorage.getItem("employees");

        if (!employeeString) {
            return [];
        }

        return JSON.parse(employeeString);
    }

    setList(employeeList) {
        let employeeString = JSON.stringify(employeeList);
        this.localStorage.setItem("employees", employeeString);
    }
}

export default EmployeeData;
