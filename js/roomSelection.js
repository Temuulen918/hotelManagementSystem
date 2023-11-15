document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Event 1', start: '2023-11-01' }
        ]
    });

    calendar.render();
});


document.addEventListener('DOMContentLoaded', function () {

    let selectedRoomNumber = '201';

    const roomButtons = document.querySelectorAll('#button-grid div button');
    roomButtons.forEach(button => {
        button.addEventListener('click', function () {

            selectedRoomNumber = this.innerText;
            document.getElementById('selectedRoom').innerText = selectedRoomNumber;

            roomButtons.forEach(btn => btn.classList.remove('selected'));

            this.classList.add('selected');
        });
    });

    document.getElementById('btn201').classList.add('selected');
});

document.addEventListener('DOMContentLoaded', function () {

    const startDateInput = document.getElementById('startDateInput');
    const endDateInput = document.getElementById('endDateInput');

    startDateInput.addEventListener('input', function () {

        const today = new Date().toISOString().split('T')[0];
        if (this.value < today) {
            this.value = today;
        }

        endDateInput.min = this.value;

        if (endDateInput.value < this.value) {
            endDateInput.value = this.value;
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const lnameInput = document.getElementById('lname');
    const phoneInput = document.getElementById('phone');
    const fnameInput = document.getElementById('fname');
    const registerNoInput = document.getElementById('registerNo');

    lnameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z-]/g, '');
    });

    phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
    });

    fnameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z-]/g, '');
    });

    registerNoInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');

    });
});




/****************order burtgeh gej bn ****************/

document.addEventListener('DOMContentLoaded', function () {

    class Order {
        constructor(roomNumber, startDate, endDate, todayDate, lastName, firstName, phoneNumber, registrationNumber) {
            this.roomNumber = roomNumber;
            this.startDate = startDate;
            this.endDate = endDate;
            this.todayDate = todayDate;
            this.lastName = lastName;
            this.firstName = firstName;
            this.phoneNumber = phoneNumber;
            this.registrationNumber = registrationNumber;
        }
    }


    let orders = [];


    function handleOrderButtonClick() {

        let roomNumber = document.getElementById("selectedRoom").innerText;
        let startDate = document.getElementById("startDateInput").value;
        let endDate = document.getElementById("endDateInput").value;
        let todayDate = new Date().toLocaleDateString();
        let lastName = document.getElementById("lname").value;
        let firstName = document.getElementById("fname").value;
        let phoneNumber = document.getElementById("phone").value;
        let registrationNumber = document.getElementById("registerNo").value;

        if (!roomNumber || !startDate || !endDate || !lastName || !firstName || !phoneNumber || !registrationNumber) {
            alert("Уучлаарай, та захиалгын мэдээллээ бүрэн бөглөнө үү.");
            return;
        }

        let newOrder = new Order(roomNumber, startDate, endDate, todayDate, lastName, firstName, phoneNumber, registrationNumber);

        orders.push(newOrder);

        displayOrderedRooms();  
    }


    function displayOrderedRooms() {
        let orderedRoomsList = document.getElementById("orderedRoomsList");
        orderedRoomsList.innerHTML = "";

        orders.forEach(order => {
            let listItem = document.createElement("li");
            listItem.textContent = `Room ${order.roomNumber}, Start Date: ${order.startDate}, End Date: ${order.endDate}, Name: ${order.firstName} ${order.lastName}, Phone: ${order.phoneNumber}, Registration Number: ${order.registrationNumber}`;
            orderedRoomsList.appendChild(listItem);
        });
    }


    document.getElementById("orderButton").addEventListener("click", handleOrderButtonClick);


});