    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
            
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', 
            events: [
                {title: 'Event 1', start: '2023-11-01'}
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