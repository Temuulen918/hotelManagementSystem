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


