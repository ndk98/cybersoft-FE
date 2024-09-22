let arrayItemsElem = document.querySelector("input[id='array-items']");

function getArrayItems() {
    return arrayItemsElem.value.length != 0
        ? arrayItemsElem.value.split(",")
        : null;
}

function handleBai1() {
    let arrayItems = getArrayItems();
    let result = 0;
    if (arrayItems) {
        for (let i = 0; i <= arrayItems.length - 1; i++) {
            let item = parseInt(arrayItems[i]);
            if (item > 0) {
                result += item;
            }
        }
    }
    document.getElementById("result-bai1").innerHTML = result;
}

function handleBai2() {
    let arrayItems = getArrayItems();
    let result = 0;
    if (arrayItems) {
        for (let i = 0; i <= arrayItems.length - 1; i++) {
            let item = parseInt(arrayItems[i]);
            if (item >= 0) {
                result++;
            }
        }
    }
    document.getElementById("result-bai2").innerHTML = result;
}

function handleBai3() {
    let arrayItems = getArrayItems();
    let min = null;
    if (arrayItems) {
        for (let i = 0; i <= arrayItems.length - 1; i++) {
            let item = parseInt(arrayItems[i]);

            if (min === null) {
                min = item;
                continue;
            }

            if (item < min) {
                min = item;
            }
        }
    }
    document.getElementById("result-bai3").innerHTML = min;
}

function handleBai4() {
    let arrayItems = getArrayItems();
    let min = null;
    if (arrayItems) {
        for (let i = 0; i <= arrayItems.length - 1; i++) {
            let item = parseInt(arrayItems[i]);

            if (item < 0) {
                continue;
            }

            if (min === null) {
                min = item;
                continue;
            }

            if (item < min) {
                min = item;
            }
        }
    }
    document.getElementById("result-bai4").innerHTML = min;
}

function handleBai5() {
    let arrayItems = getArrayItems();
    let result = -1;
    if (arrayItems) {
        for (let i = 0; i <= arrayItems.length - 1; i++) {
            let item = parseInt(arrayItems[i]);

            if (item % 2 === 0) {
                result = item;
            }
        }
    }
    document.getElementById("result-bai5").innerHTML = result;
}

function handleBai6() {
    let arrayItems = getArrayItems();
    let result = -1;
    if (arrayItems) {
        for (let i = 0; i <= arrayItems.length - 1; i++) {
            let item = parseInt(arrayItems[i]);

            if (item % 2 === 0) {
                result = item;
            }
        }
    }
    document.getElementById("result-bai6").innerHTML = result;
}

function handleBai7() {
    let arrayItems = getArrayItems();
    let result = [];
    if (arrayItems) {
        result = arrayItems.sort((a, b) => a - b);
    }
    document.getElementById("result-bai7").innerHTML = result.toString();
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Hàm tìm số nguyên tố đầu tiên trong mảng
function findFirstPrime(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            return arr[i]; // Trả về số nguyên tố đầu tiên
        }
    }
    return -1; // Nếu không có số nguyên tố, trả về -1
}

function handleBai8() {
    let arrayItems = getArrayItems();
    let result = "";
    if (arrayItems) {
        result = findFirstPrime(arrayItems);
    }
    document.getElementById("result-bai8").innerHTML = result;
}

function handleBai9() {
    let arrayItems = getArrayItems();
    let result = "";
    if (arrayItems) {
    }
    document.getElementById("result-bai9").innerHTML = result;
}

function handleBai10() {
    let arrayItems = getArrayItems();
    let positiveArray = [];
    let negativeArray = [];
    if (arrayItems) {
        for (let i = 0; i <= arrayItems.length - 1; i++) {
            let item = parseInt(arrayItems[i]);
            if (item >= 0) {
                positiveArray.push(item);
            } else {
                negativeArray.push(item);
            }
        }
    }
    let result = "";
    if (positiveArray.length > negativeArray.length) {
        result = "Số dương nhiều hơn.";
    } else {
        result = "Số âm nhiều hơn.";
    }
    if (positiveArray.length == negativeArray.length) {
        result = "Bằng nhau.";
    }
    document.getElementById("result-bai10").innerHTML = result;
}
