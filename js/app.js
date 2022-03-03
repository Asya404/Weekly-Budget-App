// Classes
class Budget {
    constructor(budget) {
        this.budgetTotal = budget;
        this.budgetLeft = budget;
    }
}


// Related to the operations with html
class HTML {

    // Inserts the budget into html when user submits it
    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }

    // Displays message (correct or invalid)
    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add(className);
        messageWrapper.innerHTML = `${message}`;
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

        setTimeout(function() {
            document.querySelector('.error').remove()
        }, 2000)
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
        
        // Read the input values
        const expenseName = document.querySelector('#name').value;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount === '') {
            html.printMessage('There was an error, all the fields are mandatory', 'error');
        } else {
            console.log('correct')
        }
    })
}