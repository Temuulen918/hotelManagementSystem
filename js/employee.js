function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
    const employeeId = popupId.replace('editPopup', '');
    const currentName = document.getElementById(`employeeName${employeeId}`).innerText;
    const currentId = document.getElementById(`employeeId${employeeId}`).innerText;
    const currentPosition = document.getElementById(`employeePosition${employeeId}`).innerText;
    const currentSsn = document.getElementById(`employeeSsn${employeeId}`).innerText;
    const currentPhone = document.getElementById(`employeePhone${employeeId}`).innerText;

    document.getElementById(`editName${employeeId}`).value = currentName;
    document.getElementById(`editId${employeeId}`).value = currentId;
    document.getElementById(`editPosition${employeeId}`).value = currentPosition;
    document.getElementById(`editSsn${employeeId}`).value = currentSsn;
    document.getElementById(`editPhone${employeeId}`).value = currentPhone;
}

function saveChanges(cardId, popupId) {
    const employeeId = popupId.replace('editPopup', '');
    const newName = document.getElementById(`editName${employeeId}`).value;
    const newId = document.getElementById(`editId${employeeId}`).value;
    const newPosition = document.getElementById(`editPosition${employeeId}`).value;
    const newSsn = document.getElementById(`editSsn${employeeId}`).value;
    const newPhone = document.getElementById(`editPhone${employeeId}`).value;

    document.getElementById(`employeeName${employeeId}`).innerText = newName;
    document.getElementById(`employeeId${employeeId}`).innerText = newId;
    document.getElementById(`employeePosition${employeeId}`).innerText = newPosition;
    document.getElementById(`employeeSsn${employeeId}`).innerText = newSsn;
    document.getElementById(`employeePhone${employeeId}`).innerText = newPhone;

    closePopup(popupId);
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}