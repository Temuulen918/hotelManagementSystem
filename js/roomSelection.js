document.addEventListener('DOMContentLoaded', function () {
    var strCalendarEl = document.getElementById('calendar');
    
    var objCalendar = new FullCalendar.Calendar(strCalendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Event 1', start: '2023-11-01' }
        ]
    });

    // Calendar render hiih
    objCalendar.render();

    // Default uruunii tootiig tohiruulav
    let strSelectedRoomNumber = '201';

    // Default uruunii tootiig tohiruulav
    const arrRoomButtons = document.querySelectorAll('#button-grid div button');
    // Uruu songoltiin tovchluuriig sonsoh uzegdel
    arrRoomButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Songogdson uruunii dugaariig daragdsan uruunii dugaaraar solih 
            strSelectedRoomNumber = this.innerText;
            document.getElementById('selectedRoom').innerText = strSelectedRoomNumber;

            // 'Selected' class-iig songogdoogui uruunii tovchluuraas hasah
            arrRoomButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    document.getElementById('btn201').classList.add('selected');

    // Ehleh ba duusah udruudiin oroltiin heseg
    const startDateInput = document.getElementById('startDateInput');
    const endDateInput = document.getElementById('endDateInput');

    // Ehleh ba duusah udriin oroltiig burtgej avna
    startDateInput.addEventListener('input', function () {
        const strToday = new Date().toISOString().split('T')[0];
        if (this.value < strToday) {
            this.value = strToday;
        }
    });

    endDateInput.addEventListener('input', function () {
        const objStartDate = new Date(startDateInput.value);
        const objEndDate = new Date(this.value);

        // Duusah udur ehleh udruus umnu bol duusah udriig ehleh udruus 1 honogiin daraa tavih heregtei
        if (objEndDate <= objStartDate) {
            objEndDate.setDate(objStartDate.getDate() + 1);
            this.value = objEndDate.toISOString().split('T')[0];
        }
    });

    const lnameInput = document.getElementById('lname');
    const phoneInput = document.getElementById('phone');
    const fnameInput = document.getElementById('fname');
    const registerNoInput = document.getElementById('registerNo');

    // Oroltiin utgad hynalt tavina
    lnameInput.addEventListener('input', function () {
        //ovog zuvhun usgeer bichigdeh heregtei tul hereglegchiin oroltiig hyzgaarlana
        this.value = this.value.replace(/[^a-zA-Z-]/g, '');
    });

    phoneInput.addEventListener('input', function () {
        //utasnii dugaar zuvhun toogoor bichigdeh heregtei tul hereglegchiin oroltiig hyzgaarlana
        this.value = this.value.replace(/\D/g, '');
    });

    fnameInput.addEventListener('input', function () {
        //ner zuvhun usgeer bichigdeh heregtei tul hereglegchiin oroltiig hyzgaarlana
        this.value = this.value.replace(/[^a-zA-Z-]/g, '');
    });

    registerNoInput.addEventListener('input', function () {
        //register zuvhun usgeer ba toogoor bichigdeh heregtei tul hereglegchiin oroltiig hyzgaarlana
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
    });

    // Order class
    class Order {
        constructor(strRoomNumber, strStartDate, strEndDate, strTodayDate, strLastName, strFirstName, strPhoneNumber, strRegistrationNumber) {
            this.roomNumber = strRoomNumber;
            this.startDate = strStartDate;
            this.endDate = strEndDate;
            this.todayDate = strTodayDate;
            this.lastName = strLastName;
            this.firstName = strFirstName;
            this.phoneNumber = strPhoneNumber;
            this.registrationNumber = strRegistrationNumber;
        }
    }

    // Burtgegdsen zahialguudiig hadgalah
    let arrOrders = [];

    // Songogdson udruuded umnu ni zahialga huleen avsan bol davharduulahgui baihiin tuld shalgah heregtei
    function isRoomAvailable(strRoomNumber, strStartDate, strEndDate) {
        for (const objOrder of arrOrders) {
            if (
                objOrder.roomNumber === strRoomNumber &&
                !(strEndDate < objOrder.startDate || strStartDate > objOrder.endDate)
            ) {
                return false;
            }
        }
        return true;
    }

    // Zahialah tovchiig darah ued hadgalah oroltuud
    function handleOrderButtonClick() {
        let strRoomNumber = document.getElementById("selectedRoom").innerText;
        let strStartDate = document.getElementById("startDateInput").value;
        let strEndDate = document.getElementById("endDateInput").value;
        let strTodayDate = new Date().toLocaleDateString();
        let strLastName = document.getElementById("lname").value;
        let strFirstName = document.getElementById("fname").value;
        let strPhoneNumber = document.getElementById("phone").value;
        let strRegistrationNumber = document.getElementById("registerNo").value;

        // Zahialgiin medeellig buren bailgah uudnees buh oroltiig buglusun esehiig shalgana
        if (!strRoomNumber || !strStartDate || !strEndDate || !strLastName || !strFirstName || !strPhoneNumber || !strRegistrationNumber) {
            alert("Уучлаарай, та захиалгын мэдээллээ бүрэн бөглөнө үү.");
            return;
        }

        // Tus uruu ni songogdson hugatsaand zahialgatai bol zahialga davharduulj avch bolohgui
        if (!isRoomAvailable(strRoomNumber, strStartDate, strEndDate)) {
            alert(`Өрөө ${strRoomNumber} нь сонгогдсон хугацаанд захиалгатай байна.`);
            return;
        }

        // Huleen avsan zahialgaa hadgalah
        let objNewOrder = new Order(strRoomNumber, strStartDate, strEndDate, strTodayDate, strLastName, strFirstName, strPhoneNumber, strRegistrationNumber);

        // Zahialgiin array-d hiih
        arrOrders.push(objNewOrder);

        // Shine zahialgaa local storage-d nemne. Ingesneer uruu olgoltiin hesegt tus zahialgiig gargah bolomjtoi bolno
        saveOrderToLocalStorage(objNewOrder);

        // Zahialga amjilttai burtgegdsen bol hereglegchid medegdeh heregtei
        alert("Таны захиалга амжилттай бүртгэгдлээ!");
    }

    // Shine zahialgiig local storage-d hadgalah uildel
    function saveOrderToLocalStorage(objOrder) {
        let arrStoredOrders = JSON.parse(localStorage.getItem('orders')) || [];
        arrStoredOrders.push(objOrder);
        localStorage.setItem('orders', JSON.stringify(arrStoredOrders));
    }

    // Zahialah tovchluuriig hereglegch darah ued 
    document.getElementById("orderButton").addEventListener("click", handleOrderButtonClick);
});
