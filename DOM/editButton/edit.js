function addCustomerToLocalStorage(customer) {
    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers));
    displayCustomers();
}


function displayCustomers() {
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = '';

    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    customers.forEach((customer, index) => {
        const customerItem = document.createElement('li');
        customerItem.textContent = `Name: ${customer.name}, Email: ${customer.email}, Contact: ${customer.contact}`;

       
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editCustomer(index));

       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteCustomer(index));

        customerItem.appendChild(editButton);
        customerItem.appendChild(deleteButton);
        customerList.appendChild(customerItem);
    });
}


function deleteCustomer(index) {
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    customers.splice(index, 1);
    localStorage.setItem('customers', JSON.stringify(customers));
    displayCustomers();
}


function editCustomer(index) {
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    const customer = customers[index];

  
    const updatedCustomer = prompt('Edit Customer Details', JSON.stringify(customer));
    if (updatedCustomer !== null) {
        try {
            const updatedCustomerObj = JSON.parse(updatedCustomer);
            customers[index] = updatedCustomerObj;
            localStorage.setItem('customers', JSON.stringify(customers));
            displayCustomers();
        } catch (error) {
            alert('Invalid input. Please enter valid JSON for customer details.');
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    displayCustomers();

    const addButton = document.getElementById('addButton');

    addButton.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();

        if (name !== '' && email !== '' && contact !== '') {
            const newCustomer = { name, email, contact };
            addCustomerToLocalStorage(newCustomer);
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('contact').value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

    const deleteButton = document.getElementById('deleteButton');

    deleteButton.addEventListener('click', () => {
    });
});