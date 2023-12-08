function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
    const employeeId = popupId.replace('editPopup', '');
    const currentType = document.getElementById(`roomType${employeeId}`).innerText;
    const currentNumber = document.getElementById(`roomNumber${employeeId}`).innerText;
    const currentName = document.getElementById(`roomName${employeeId}`).innerText;
    const currentMore = document.getElementById(`roomMore${employeeId}`).innerText;
    
    document.getElementById(`editType${employeeId}`).value = currentType;
    document.getElementById(`editNumber${employeeId}`).value = currentNumber;
    document.getElementById(`editName${employeeId}`).value = currentName;
    document.getElementById(`editMore${employeeId}`).value = currentMore;

}

function saveChanges(cardId, popupId) {
    const employeeId = popupId.replace('editPopup', '');
    const newType = document.getElementById(`editType${employeeId}`).value;
    const newNumber = document.getElementById(`editNumber${employeeId}`).value;
    const newName = document.getElementById(`editName${employeeId}`).value;
    const newMore = document.getElementById(`editMore${employeeId}`).value;


    document.getElementById(`roomType${employeeId}`).innerText = newType;
    document.getElementById(`roomNumber${employeeId}`).innerText = newNumber;
    document.getElementById(`roomName${employeeId}`).innerText = newName;
    document.getElementById(`roomMore${employeeId}`).innerText = newMore;

    closePopup(popupId);
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}s