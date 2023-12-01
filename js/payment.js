document.addEventListener('DOMContentLoaded', function () {
    function loadOrdersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    function markAsCheckedIn(index) {
        const orders = loadOrdersFromLocalStorage();
        orders[index].checkedIn = true;
        localStorage.setItem('orders', JSON.stringify(orders));
        renderOrders();
    }

    function calculateAmount(order) {
        const roomPriceMap = {
            '201': 120000,
            '202': 120000,
            '203': 120000,
            '204': 120000,
            '205': 120000,
            '206': 120000,
            '207': 120000,
            '208': 120000,
            '209': 120000,
            '301': 150000,
            '302': 150000,
            '303': 150000,
            '304': 150000,
            '305': 150000,
            '306': 150000,
            '307': 150000,
            '308': 150000,
            '309': 150000,
            '401': 180000,
            '402': 180000,
            '403': 180000,
            '404': 180000,
            '405': 180000,
            '406': 180000,
            '407': 180000,
            '408': 180000,
            '409': 180000,
            '501': 200000,
            '502': 200000,
            '503': 200000,
            '504': 200000,
            '505': 200000,
            '506': 200000,
            '507': 200000,
            '508': 200000,
            '509': 200000,
        };

        const startDate = new Date(order.startDate);
        const endDate = new Date(order.endDate);
        const daysStayed = Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000));

        const roomPrice = roomPriceMap[order.roomNumber];
        return daysStayed * roomPrice;
    }

    function renderOrders() {
        const orders = loadOrdersFromLocalStorage();
        const dataOutput = document.querySelector('.policy-table');

        dataOutput.innerHTML = '';

        orders.forEach((order, index) => {
            if (order.checkedIn) {
                const policyDiv = document.createElement('div');
                policyDiv.classList.add('policy');

                const amount = calculateAmount(order);

                // Render order details
                // You can customize this part based on your order structure
                policyDiv.innerHTML = `
                    <span>${order.roomNumber}</span>
                    <span>${order.startDate}</span>
                    <span>${order.endDate}</span>
                    <span>${order.todayDate}</span>
                    <span>${order.lastName}</span>
                    <span>${order.firstName}</span>
                    <span>${order.phoneNumber}</span>
                    <span>${order.registrationNumber}</span>
                    <span>${amount}</span>
                `;

                const button = document.createElement('button');
                button.classList.add('button');
                button.textContent = 'Төлбөр төлөх';
                button.addEventListener('click', function () {
                    markAsCheckedIn(index);
                });

                policyDiv.appendChild(button);
                dataOutput.appendChild(policyDiv);
            }
        });
    }

    renderOrders();
});
