document.addEventListener('DOMContentLoaded', function () {
    // anhnii utga bolon togmoluudii utga 
    const config = {
        roomPriceMap: {
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
        },
        defaultMode: 'default', // 'default' esvel busad gorim deer
    };

    // Zahialga huleen avah hesegt huleen avsan JSON medeellee ene hesegt gargaj uruu olgoh bolomjtoi bolgono
    function loadOrdersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    // Local storaged hadgalsan ugugdluus checked in zahialgiig renderleh 
    function renderOrders() {
        const arrOrders = loadOrdersFromLocalStorage();
        const objDataOutput = document.querySelector('.policy-table');

        objDataOutput.innerHTML = ''; 

        arrOrders.forEach((objOrder) => {
            if (objOrder.checkedIn) {
                const objPolicyDiv = document.createElement('div');
                objPolicyDiv.classList.add('policy');

                const intAmount = calculateAmount(objOrder, config.roomPriceMap);

                // Neg zahialgiin HTML
                objPolicyDiv.innerHTML = `
                    <span>${objOrder.roomNumber}</span>
                    <span>${objOrder.startDate}</span>
                    <span>${objOrder.endDate}</span>
                    <span>${objOrder.todayDate}</span>
                    <span>${objOrder.lastName}</span>
                    <span>${objOrder.firstName}</span>
                    <span>${objOrder.phoneNumber}</span>
                    <span>${objOrder.registrationNumber}</span>
                    <span>${intAmount}</span>
                `;

                // Checked in zahialguudiin tulbur tuluh button-iig hiine
                const objButton = document.createElement('button');
                objButton.classList.add('button');
                objButton.textContent = 'Төлбөр төлөх';

                // Button-iig HTML dotor oruulna
                objPolicyDiv.appendChild(objButton);
                objDataOutput.appendChild(objPolicyDiv);
            }
        });
    }

    // Uruunii tootoos hamaaran uniin dun uur baina. 
    //Tulbur tuluh hesegt uilchluulsen hugatsaa ba uruunii tootoots hamaaran tulbur bodogdono
    function calculateAmount(objOrder, roomPriceMap) {
        const roomNumber = objOrder.roomNumber;
        const objStartDate = new Date(objOrder.startDate);
        const objEndDate = new Date(objOrder.endDate);
        const intDaysStayed = Math.ceil((objEndDate - objStartDate) / (24 * 60 * 60 * 1000));

        const intRoomPrice = roomPriceMap[roomNumber] || config.roomPriceMap[config.defaultMode];
        return intDaysStayed * intRoomPrice;
    }

    // 
    renderOrders();
});