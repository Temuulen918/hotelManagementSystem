import 'jest-localstorage-mock';

describe("Room Selection App Tests", function () {
    let calendar;
    let selectedRoomNumber;
    let orders;
  
    beforeEach(function () {
      // Environmentaa set up hiine
      jasmine.Ajax.install(); 
  
      // Application ehluulne
      document.body.innerHTML = '<div id="calendar"></div>'; // Creating a minimal HTML structure
      calendar = new FullCalendar.Calendar(document.getElementById('calendar'));
      selectedRoomNumber = '201';
      orders = [];
    });
  
    afterEach(function () {
      // test buriin ehend environment ee tseverlene
      jasmine.Ajax.uninstall(); 
      localStorage.clear(); 
    });
  
    it("uruunii tootiig songoh ued selected room uurchlugddug baih", function () {
        const roomButton202 = document.querySelector('#button-grid div button:nth-child(2)'); // 202 deer darna gej tootsson
        roomButton202.click();
        expect(selectedRoomNumber).toBe("202");
        expect(document.getElementById("selectedRoom").innerText).toBe("202");
    });
  
    it("ehleh udur unuudruus umnu bol unuudruur solih", function () {
      const startDateInput = document.getElementById("startDateInput");
      startDateInput.value = "2023-09-01";
      startDateInput.dispatchEvent(new Event("input"));
      const today = new Date().toISOString().split('T')[0];
      expect(startDateInput.value).toBe(today);
    });
  
    it("duusah udur ehnii udruus umnu bol ehnii udriin margaashaar solih", function () {
      const startDateInput = document.getElementById("startDateInput");
      const endDateInput = document.getElementById("endDateInput");
      startDateInput.value = "2023-09-01";
      endDateInput.value = "2023-01-01";
      startDateInput.dispatchEvent(new Event("input"));
      endDateInput.dispatchEvent(new Event("input"));
      const nextDay = new Date("2023-09-02").toISOString().split('T')[0];
      expect(endDateInput.value).toBe(nextDay);
    });
  
    it("ovog zuvhun usgen temdegt baih", function () {
      const lnameInput = document.getElementById('lname');
      lnameInput.value = "1234?ABC";
      lnameInput.dispatchEvent(new Event("input"));
      expect(lnameInput.value).toBe("ABC");
    });
  
    it("ner zuvhun usgen temdegt baih", function () {
      const fnameInput = document.getElementById('fname');
      fnameInput.value = "1234?ABC";
      fnameInput.dispatchEvent(new Event("input"));
      expect(fnameInput.value).toBe("ABC");
    });
  
    it("utasnii dugaar zuvhun too baih", function () {
      const phoneInput = document.getElementById('phone');
      phoneInput.value = "ABC123";
      phoneInput.dispatchEvent(new Event("input"));
      expect(phoneInput.value).toBe("123");
    });
  
    it("registeriin dugaar zuv huleen avch baih", function () {
      const registerNoInput = document.getElementById('registerNo');
      registerNoInput.value = "ABCD1234";
      registerNoInput.dispatchEvent(new Event("input"));
      expect(registerNoInput.value).toBe("ABCD1234");
    });
  
    it("zahialga uguhud buh orolt buren esehiig shalgah", function () {
      // negiig ni hooson orhiloo
      document.getElementById("lname").value = "Doe";
      document.getElementById("fname").value = "John";
      document.getElementById("phone").value = "12345678";
      document.getElementById("registerNo").value = "";
  
      spyOn(window, 'alert');
      document.getElementById("orderButton").click();
  
      expect(window.alert).not.toHaveBeenCalled();
    });
  
    it("zahialga tsutslagdsan bol alert message-eer medegddeg baih", function () {
      spyOn(window, 'alert');
  
      // negiig ni hooson orhiloo
      document.getElementById("lname").value = "Doe";
      document.getElementById("fname").value = "John";
      document.getElementById("phone").value = "12345678";
      document.getElementById("registerNo").value = "";
  
      document.getElementById("orderButton").click();
  
      expect(window.alert).toHaveBeenCalledWith("Уучлаарай, та захиалгын мэдээллээ бүрэн бөглөнө үү.");
    });
  
    it("zahialga davhardsan esehiig shalgadag baih", function () {
      // fake local storage uusgey
      const fakeOrder = {
        roomNumber: '201',
        startDate: '2023-12-02',
        endDate: '2023-12-09',
        todayDate: '2023-12-01',
        lastName: 'Doe',
        firstName: 'John',
        phoneNumber: '12345678',
        registrationNumber: 'ABCD1234'
      };
      localStorage.setItem('orders', JSON.stringify([fakeOrder]));
  
      //ijil uruund dahin zahialga ugiy
      spyOn(window, 'alert');
      document.getElementById("btn201").click();
      document.getElementById("orderButton").click();
  
      expect(window.alert).toHaveBeenCalledWith(`Өрөө 201 нь сонгогдсон хугацаанд захиалгатай байна.`);
    });
  
    it("zahialga zuvshuurugdsun bol zahialgiig local storaged hadgaldag baih", function () {
      spyOn(window, 'alert');
      document.getElementById("lname").value = "Doe";
      document.getElementById("fname").value = "John";
      document.getElementById("phone").value = "12345678";
      document.getElementById("registerNo").value = "ABCD1234";
  
      document.getElementById("orderButton").click();
  
      const storedOrders = JSON.parse(localStorage.getItem('orders'));
      expect(storedOrders.length).toBe(1);
      expect(storedOrders[0]).toEqual(jasmine.objectContaining({
        roomNumber: '201',
        lastName: 'Doe',
        firstName: 'John',
        phoneNumber: '12345678',
        registrationNumber: 'ABCD1234'
      }));
    });

  });
  
  