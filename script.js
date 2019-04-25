var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt ("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (var i = 0; i < 2; i++) {
    var a = prompt("Введите обязательную статью расходов в этом месяце", "");
    var b = prompt("Во сколько обойдется?", "");

    if (a != null && a != "" && b != null && 
    b != "" && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        console.log("Введите корректные значения");
        i--;
    }
}

// var i = 0;
// while (i < 2) {
//     var a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     var b = prompt("Во сколько обойдется?", "");
//     i++;

//     if (a != null && a != "" && b != null && 
//     b != "" && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         console.log("Введите корректные значения");
//         i--;
//     }
// }

// var i = 0;
// do {
//     var a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     var b = prompt("Во сколько обойдется?", "");
//     i++;

//     if (a != null && a != "" && b != null && 
//     b != "" && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         console.log("Введите корректные значения");
//         i--;
//     }
// }
// while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 500) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}