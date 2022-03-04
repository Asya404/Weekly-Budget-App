// CLASSES
class Budget {
    constructor(budget) {
        this.budgetTotal = budget;
        this.budgetLeft = budget;
    }

    substractFromBudget(amount) {
       return this.budgetLeft -= amount;
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
            addExpenseForm.reset();
        }, 2000)
    }

    // Displays the expenses from the form into the list
    addExpenseToList(name, amount) {
        const expensesList = document.querySelector('.expenses ul');
        const li = document.createElement('li');
        li.innerHTML = `
            <div>${name}</div>
            <div class="expenses__amount">$ ${amount}</div>`;
        expensesList.appendChild(li);
    }

    // Substract expense amount from budget
    trackBudget(amount) {
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}`;

        // Check when 20% is left
        if((budget.budgetTotal / 4) > budgetLeftDollars) {
            budgetLeft.parentElement.parentElement.classList.remove('budget-success');
            budgetLeft.parentElement.parentElement.classList.add('budget-danger');

        // Check when 50% is left
        } else if((budget.budgetTotal / 2) > budgetLeftDollars) {
            budgetLeft.parentElement.parentElement.classList.remove('budget-success');
            budgetLeft.parentElement.parentElement.classList.add('budget-warning');
        }
    }
}





// VARIABLES
const addExpenseForm = document.querySelector('#add-expense'),
        budgetTotal = document.querySelector('span#total'),
        budgetLeft = document.querySelector('span#left');

const html = new HTML();
let budget, userBudget;







// EVENT LISTENERS
eventListeners();
function eventListeners() {

    // validating the prompt (if ok -> create new obj budget, then insert into html)
    document.addEventListener('DOMContentLoaded', function() {
        userBudget = prompt("What's your budget for this week?");

        // Validate the user budget
        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        } else {

            // if ok -> create new obj budget, then insert into html
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
            // Add expenses into the list
            html.addExpenseToList(expenseName, amount);
            html.trackBudget(amount);
        }
    })
}