const submitButton = document.getElementById('submit-expense-button');

submitButton.addEventListener('click', (e) => {        
    e.preventDefault();
    const dateInput = document.getElementById('date-input');
    const priceInput = document.getElementById('expense-amount');
    const expenseDescription = document.getElementById('expense-description');
    const purchaseLocation = document.getElementById('purchase-location');
    const paymentMethod = document.getElementById('payment-method');

    if (
        !dateInput.value || 
        !priceInput.value || 
        !expenseDescription.value || 
        !purchaseLocation.value
     ) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    const expenseItem = {
        id: Date.now(),
        date: dateInput.value,
        price: priceInput.value,
        description: expenseDescription.value,
        location: purchaseLocation.value,
        paymentMethod: paymentMethod.value
    };
    
    renderExpenseRow(expenseItem)
    const expenseArray = getExpenses();
    expenseArray.push(expenseItem);
    saveExpenses(expenseArray);

    document.getElementById('expense-input-form').reset();
});

function renderExpenseRow(expense) {
    const expenseTable = document.getElementById('expense-table');
    const newRow = expenseTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    
    cell1.textContent = expense.date;
    cell2.textContent = '$' + expense.price;
    cell3.textContent = expense.description;
    cell4.textContent = expense.location;
    cell5.textContent = expense.paymentMethod;
    const deleteButton = createDeleteButton();

    newRow.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        deleteExpense(newRow, expense.id);
    });
}

function getExpenses() {
    return JSON.parse(localStorage.getItem('expenseArray')) || [];
}

function saveExpenses(array) {
    localStorage.setItem('expenseArray', JSON.stringify(array));
}

function deleteExpense(targetRow, id) {
    targetRow.remove();
    const expenseArray = getExpenses();
    for (let i = 0; i < expenseArray.length; i++) {
        if (expenseArray[i].id === id) {
            expenseArray.splice(i, 1);
            saveExpenses(expenseArray);
        }
    }
}

function createDeleteButton(newRow) {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'deleteButton');
    deleteButton.textContent = "X";
    return deleteButton;
}

window.addEventListener('load', () => {
    const expenseArray = getExpenses();
    expenseArray.forEach((expense) => {
        renderExpenseRow(expense);
    });
});
  