function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Invalid Number";
  } else {
    const ticketPrice = 120;
    const gatemanFee = 500;
    const staffFee = 50 * 8;

    let remainingMoney = ticketPrice * ticketSale - (gatemanFee + staffFee);
    return remainingMoney;
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    let lastCharOfName = name.charAt(name.length - 1).toLowerCase();
    if (
      lastCharOfName === "a" ||
      lastCharOfName === "y" ||
      lastCharOfName === "i" ||
      lastCharOfName === "e" ||
      lastCharOfName === "o" ||
      lastCharOfName === "u" ||
      lastCharOfName === "w"
    ) {
      return "Good Name";
    }

    return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    return "Invalid Array";
  } else {
    let newArray = [];
    for (const arr of array) {
      if (typeof arr === "number" && !isNaN(arr)) {
        newArray.push(arr);
      }
    }
    return newArray;
  }
}

function password(obj) {
  if (typeof obj !== "object") {
    return "invalid";
  } else if (
    obj.hasOwnProperty("name") === false ||
    obj.hasOwnProperty("birthYear") === false ||
    obj.hasOwnProperty("siteName") === false
  ) {
    return "invalid";
  } else if (
    typeof obj.name !== "string" ||
    typeof obj.birthYear !== "number" ||
    typeof obj.siteName !== "string"
  ) {
    return "invalid";
  } else if (obj.birthYear.toString().length !== 4) {
    return "invalid";
  } else {
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName =
      obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const str = siteName + "#" + name + "@" + birthYear;
    return str;
  }
}

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) == false || typeof livingCost !== "number") {
    return "invalid input";
  } else {
    let totalPayment = 0;
    let savings = 0;

    for (let num of arr) {
      if (num >= 3000) {
        let tax = num * 0.2;
        num = num - tax;
      }
      totalPayment = totalPayment + num;
    }
    savings = totalPayment - livingCost;
    if (savings < 0) {
      return "earn more";
    } else {
      return savings;
    }
  }
}
