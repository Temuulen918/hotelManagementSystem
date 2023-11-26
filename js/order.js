document.addEventListener('DOMContentLoaded', function () {
    function loadOrdersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    function displayOrders() {
        const orders = loadOrdersFromLocalStorage();
        const tableContainer = document.querySelector('.policy-table');

        tableContainer.innerHTML = '';

        orders.forEach(order => {
            const row = document.createElement('div');
            row.classList.add('policy');

            row.innerHTML = `
                <span>${order.roomNumber}</span>
                <span>${order.startDate}</span>
                <span>${order.endDate}</span>
                <span>${order.todayDate}</span>
                <span>${order.lastName}</span>
                <span>${order.firstName}</span>
                <span>${order.phoneNumber}</span>
                <span>${order.registrationNumber}</span>
                <button class="button">Өрөө олгох</button>
            `;

            tableContainer.appendChild(row);
        });
    }
    displayOrders();
});
