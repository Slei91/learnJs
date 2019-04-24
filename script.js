var money = prompt("Ваш бюджет на месяц?", "");
var time = prompt ("Введите дату в формате YYYY-MM-DD", "");


var appData = {
    budget: money,
    timeData: time,
    expenses: {
        item1: price1,
        item2: price2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

var item1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var price1 = prompt("Во сколько обойдется?", "");
var item2 = prompt("Введите обязательную статью расходов в этом месяце", "");
var price2 = prompt("Во сколько обойдется?", "");

appData.expenses.item1 = price1;
appData.expenses.item2 = price2;


// alert(appData.budget);
// alert(appData.expenses.item1);

var oneDayBudget = appData.budget / 30;
alert(oneDayBudget);