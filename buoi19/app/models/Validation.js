class Validation {
    requiredValidate(value) {
        if (value.length === 0) {
            return {
                valid: false,
                message: "Trường này không được để trống!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }

    usernameValidate(value) {
        // Require validate
        let requireValidated = this.requiredValidate(value);

        if (!requireValidated.valid) {
            return requireValidated;
        }

        // Length validate
        if (value.length < 4 || value.length > 6) {
            return {
                valid: false,
                message: "Độ dài tối đa của tài khoản từ 4 đến 6 ký tự!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }

    nameValidate(value) {
        // Require validate
        let requireValidated = this.requiredValidate(value);

        if (!requireValidated.valid) {
            return requireValidated;
        }

        // Character validate
        const regex = /^[A-Za-z]+$/;
        if (!regex.test(value)) {
            return {
                valid: false,
                message: "Tên người dùng chỉ được chứa chữ cái!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }

    emailValidate(value) {
        // Require validate
        let requireValidated = this.requiredValidate(value);

        if (!requireValidated.valid) {
            return requireValidated;
        }

        // Email validate
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            return {
                valid: false,
                message: "Địa chỉ email không hợp lệ!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }

    passwordValidate(value) {
        // Require validate
        let requireValidated = this.requiredValidate(value);

        if (!requireValidated.valid) {
            return requireValidated;
        }

        // 6 - 10 characters long, at least one number, one uppercase letter, one special character
        const regex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
        if (!regex.test(value)) {
            return {
                valid: false,
                message:
                    "Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa và 1 ký tự đặc biệt!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }

    workDayValidate(value) {
        // Require validate
        let requireValidated = this.requiredValidate(value);

        if (!requireValidated.valid) {
            return requireValidated;
        }

        // mm/dd/yyyy format
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        if (!regex.test(value)) {
            return {
                valid: false,
                message: "Ngày làm việc phải có định dạng mm/dd/yyyy!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }

    basicSalaryValidate(value) {
        // Require validate
        let requireValidated = this.requiredValidate(value);

        if (!requireValidated.valid) {
            return requireValidated;
        }

        // greater than 1.000.000, less than 20.000.000
        const salary = parseInt(value, 10);
        if (isNaN(salary) || salary < 1000000 || salary > 20000000) {
            return {
                valid: false,
                message: "Lương cơ bản phải từ 1,000,000 đến 20,000,000!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }

    positionValidate(value) {
        // Require validate
        let requireValidated = this.requiredValidate(value);

        if (!requireValidated.valid) {
            return requireValidated;
        }

        const validPositions = ["manager", "head-of-division", "staff"];
        if (!validPositions.includes(value)) {
            return {
                valid: false,
                message: "Chức vụ không hợp lệ!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }

    workTimeValidate(value) {
        // Require validate
        let requireValidated = this.requiredValidate(value);

        if (!requireValidated.valid) {
            return requireValidated;
        }

        const hours = parseInt(value, 10);
        if (isNaN(hours) || hours < 80 || hours > 200) {
            return {
                valid: false,
                message: "Số giờ làm việc phải từ 80 đến 200 giờ!",
            };
        }

        return {
            valid: true,
            message: "",
        };
    }
}

export default Validation;
