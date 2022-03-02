// Classes
class Budget {
    constructor(budget) {
        this.budget = budget;
        this.budgetLeft = budget;
    }
}




// Variables
const addExpenseForm = document.querySelector('#add-expense');
let budget, userBudget;





// Event Listeners
eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', function() {
        userBudget = prompt("What's your budget for this week?");

        // Validate the user budget
        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        } else {
            budget = new Budget(userBudget);
        }
    })

    // When a new expense is added
    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
    })
}