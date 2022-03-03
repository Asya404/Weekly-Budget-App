// Classes
class Budget {
    constructor(budget) {
        this.budgetTotal = budget;
        this.budgetLeft = budget;
    }
}


// Related to the operations with html
class HTML {
    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
}



// Variables
const addExpenseForm = document.querySelector('#add-expense'),
        budgetTotal = document.querySelector('span#total'),
        budgetLeft = document.querySelector('span#left');

const html = new HTML();
let budget, userBudget;





// Event Listeners
eventListeners();
function eventListeners() {

    // validating the prompt (if ok -> create new obj budget, then insert into html)
    document.addEventListener('DOMContentLoaded', function() {
        userBudget = prompt("What's your budget for this week?");

        // Validate the user budget
        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        } else {
            budget = new Budget(userBudget);
            html.insertBudget(budget.budgetTotal);
        }
    })

    // When a new expense is added
    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
    })
}