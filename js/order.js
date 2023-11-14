    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
            
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', // Display a monthly view
            events: [
                {title: 'Event 1', start: '2023-11-01'}
            ]
        });

        calendar.render(); // Render the calendar
    });


    document.addEventListener('DOMContentLoaded', function () {
        // Set default room number to 201
        let selectedRoomNumber = '201';
        document.getElementById('selectedRoom').innerText = selectedRoomNumber;

        // Handle button clicks
        const roomButtons = document.querySelectorAll('#button-grid button');
        roomButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Update selected room number
                selectedRoomNumber = this.innerText;
                document.getElementById('selectedRoom').innerText = selectedRoomNumber;

                // Remove 'selected' class from all buttons
                roomButtons.forEach(btn => btn.classList.remove('selected'));

                // Add 'selected' class to the clicked button
                this.classList.add('selected');
            });
        });

        // Your other JavaScript code
    });