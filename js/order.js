document.addEventListener('DOMContentLoaded', function () {

    // Zahialga huleen avah hesegt huleen avsan JSON medeellee ene hesegt gargaj uruu olgoh bolomjtoi bolgono
    function loadOrdersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    // Shinechilsen array-gaa local storaged hadgalahdaa ashiglana
    function saveOrdersToLocalStorage(arrOrders) {
        localStorage.setItem('orders', JSON.stringify(arrOrders));
    }

    // Uruu olgoh tovchiig darah ued checked in-iig true bolgohoor duudna
    function markAsCheckedIn(intIndex) {
        const arrOrders = loadOrdersFromLocalStorage();
        arrOrders[intIndex].checkedIn = true;
        saveOrdersToLocalStorage(arrOrders);
        displayOrders();
    }

    // Local storage-d baigaa zahialgiin medeelliig render hiij, olgoson uruug HTML-ees hasah uildel hiine
    function displayOrders() {
        const arrOrders = loadOrdersFromLocalStorage();
        const objTableContainer = document.querySelector('.policy-table');

        objTableContainer.innerHTML = ''; 

        arrOrders.forEach((objOrder, intIndex) => {
            if (!objOrder.checkedIn) {
                const objRow = document.createElement('div');
                objRow.classList.add('policy');

                // Uruu olgoh tovchluuriig uusgej daragdsan ued ni tuhain zahialgiig HTML-ees hasah uildel hiine
                const objButton = document.createElement('button');
                objButton.classList.add('button');
                objButton.textContent = 'Өрөө олгох';
                objButton.addEventListener('click', function () {
                    markAsCheckedIn(intIndex);
                });

                // Zahialgiin HTML butets
                objRow.innerHTML = `
                    <span>${objOrder.roomNumber}</span>
                    <span>${objOrder.startDate}</span>
                    <span>${objOrder.endDate}</span>
                    <span>${objOrder.todayDate}</span>
                    <span>${objOrder.lastName}</span>
                    <span>${objOrder.firstName}</span>
                    <span>${objOrder.phoneNumber}</span>
                    <span>${objOrder.registrationNumber}</span>
                `;

                // Zahialgiin medeelliig HTML-d zurj baina
                objRow.appendChild(objButton);
                objTableContainer.appendChild(objRow);
            }
        });
    }
    displayOrders();
});
