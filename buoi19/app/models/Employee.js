class Employee {
    constructor(
        username,
        name,
        email,
        password,
        workDay,
        basicSalary,
        position,
        workTimeOnMonth,
        totalSalary = "",
        employeeType = ""
    ) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.workDay = workDay;
        this.basicSalary = basicSalary;
        this.position = position;
        this.workTimeOnMonth = workTimeOnMonth;
        this.totalSalary = totalSalary;
        this.employeeType = employeeType;
    }
}

export default Employee;
