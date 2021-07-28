const expenseTable = document.getElementById('expense-table');
const submitButton = document.getElementById('submit-expense-button')
const deleteButton = createDeleteButton();
const form = document.getElementById('expense-input')

function addDate() {
    const dateInput = document.getElementById('date-input');
    const dateCell = dateInput.value;
    return dateCell;
}

function addPrice() {
    const priceInput = document.getElementById('expense-amount');
    const priceCell = priceInput.value;
    return priceCell;
}

function addExpenseDescription() {
    const expenseDescription = document.getElementById('expense-description');
    const expenseCell = expenseDescription.value;
    return expenseCell;
}

function addPurchaseLocation() {
    const purchaseLocation = document.getElementById('purchase-location');
    const purchaseLocationCell = purchaseLocation.value;
    return purchaseLocationCell;
}

function addPaymentMethod() {
    const paymentMethod = document.getElementById('payment-method');
    const paymentMethodCell = paymentMethod.value;
    return paymentMethodCell;
}

submitButton.addEventListener('click', function addExpense(e) {        
    e.preventDefault();

    const newRow = expenseTable.insertRow(1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    
    cell1.textContent = addDate();
    cell2.textContent = addPrice();
    cell3.textContent = addExpenseDescription();
    cell4.textContent = addPurchaseLocation();
    cell5.textContent = addPaymentMethod();

    
    
    newRow.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        newRow.remove();
    });
    return deleteButton;

});

function createDeleteButton(newRow) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete expense";
    return deleteButton;
}
 
 /*if (dateCell === '' || priceCell === '' || expenseCell === '' || 
    purchaseLocationCell === '' || paymentMethodCell === '') {
    alert('Please fill out all fields!');
    return;
    }*/    