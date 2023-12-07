function openPopup(strPopupId) {
    // Display the specified popup
    document.getElementById(strPopupId).style.display = 'flex';

    // Extract the employee ID from the popup ID
    const strEmployeeId = strPopupId.replace('editPopup', '');

    // Retrieve current employee data from the corresponding HTML elements
    const strCurrentName = document.getElementById(`employeeName${strEmployeeId}`).innerText;
    const strCurrentId = document.getElementById(`employeeId${strEmployeeId}`).innerText;
    const strCurrentPosition = document.getElementById(`employeePosition${strEmployeeId}`).innerText;
    const strCurrentSsn = document.getElementById(`employeeSsn${strEmployeeId}`).innerText;
    const strCurrentPhone = document.getElementById(`employeePhone${strEmployeeId}`).innerText;

    // Populate the input fields in the popup with the current employee data
    document.getElementById(`editName${strEmployeeId}`).value = strCurrentName;
    document.getElementById(`editId${strEmployeeId}`).value = strCurrentId;
    document.getElementById(`editPosition${strEmployeeId}`).value = strCurrentPosition;
    document.getElementById(`editSsn${strEmployeeId}`).value = strCurrentSsn;
    document.getElementById(`editPhone${strEmployeeId}`).value = strCurrentPhone;
}

// Function to save changes made in a popup and update the corresponding employee card
function saveChanges(strCardId, strPopupId) {
    // Extract the employee ID from the popup ID
    const strEmployeeId = strPopupId.replace('editPopup', '');

    // Retrieve the new data entered in the popup input fields
    const strNewName = document.getElementById(`editName${strEmployeeId}`).value;
    const strNewId = document.getElementById(`editId${strEmployeeId}`).value;
    const strNewPosition = document.getElementById(`editPosition${strEmployeeId}`).value;
    const strNewSsn = document.getElementById(`editSsn${strEmployeeId}`).value;
    const strNewPhone = document.getElementById(`editPhone${strEmployeeId}`).value;

    // Update the corresponding employee card with the new data
    document.getElementById(`employeeName${strEmployeeId}`).innerText = strNewName;
    document.getElementById(`employeeId${strEmployeeId}`).innerText = strNewId;
    document.getElementById(`employeePosition${strEmployeeId}`).innerText = strNewPosition;
    document.getElementById(`employeeSsn${strEmployeeId}`).innerText = strNewSsn;
    document.getElementById(`employeePhone${strEmployeeId}`).innerText = strNewPhone;

    // Close the popup after saving changes
    closePopup(strPopupId);
}

// Function to close a popup
function closePopup(strPopupId) {
    // Hide the specified popup
    document.getElementById(strPopupId).style.display = 'none';
}
