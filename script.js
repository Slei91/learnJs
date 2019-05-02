"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (money == "" || money == null || isNaN(money)) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let b = prompt("Статья необязательных расходов?", "");
            // appData.optionalExpenses[i] = b;
    
            if (b != "" && b != null) {
                appData.optionalExpenses[i] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 500) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений", ""),
                percent = +prompt("Под какой процент", "");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход (перечислить через запятую)","");

        if (isNaN(items) && items != null && items != "") {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort();
        } else {
            console.log("Некорректные данные");
        }

        appData.income.forEach(function(item, index) {
            alert("Способы доп. заработка: " + (index + 1) + " - " + item);
        });
    }
};

for (var key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}