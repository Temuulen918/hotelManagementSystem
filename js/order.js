document.addEventListener('DOMContentLoaded', function () {
    function loadOrdersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    function saveOrdersToLocalStorage(orders) {
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    function markAsCheckedIn(index) {
        const orders = loadOrdersFromLocalStorage();
        orders[index].checkedIn = true;
        saveOrdersToLocalStorage(orders);
        displayOrders();
    }

    function displayOrders() {
        const orders = loadOrdersFromLocalStorage();
        const tableContainer = document.querySelector('.policy-table');

        tableContainer.innerHTML = '';

        orders.forEach((order, index) => {
            if (!order.checkedIn) {
                const row = document.createElement('div');
                row.classList.add('policy');

                const button = document.createElement('button');
                button.classList.add('button');
                button.textContent = 'Өрөө олгох';
                button.addEventListener('click', function () {
                    markAsCheckedIn(index);
                });

                row.innerHTML = `
                    <span>${order.roomNumber}</span>
                    <span>${order.startDate}</span>
                    <span>${order.endDate}</span>
                    <span>${order.todayDate}</span>
                    <span>${order.lastName}</span>
                    <span>${order.firstName}</span>
                    <span>${order.phoneNumber}</span>
                    <span>${order.registrationNumber}</span>
                `;

                row.appendChild(button);
                tableContainer.appendChild(row);
            }
        });
    }

    displayOrders();
});
