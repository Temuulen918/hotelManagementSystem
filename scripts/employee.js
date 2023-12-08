function openPopup(strPopupId) {
    // Zasah tovch daragdsan ajiltanii medeelel pop up-aar garch irne. Ter boltol display=none baina
    document.getElementById(strPopupId).style.display = 'flex';

    // Pop up-iin ID-gaas heddeh ajiltang zasahiig ylgaj avna
    const strEmployeeId = strPopupId.replace('editPopup', '');

    // Odoogiin ajiltanii medeelliig unshij huvisagchid hadgalna
    const strCurrentName = document.getElementById(`employeeName${strEmployeeId}`).innerText;
    const strCurrentId = document.getElementById(`employeeId${strEmployeeId}`).innerText;
    const strCurrentPosition = document.getElementById(`employeePosition${strEmployeeId}`).innerText;
    const strCurrentSsn = document.getElementById(`employeeSsn${strEmployeeId}`).innerText;
    const strCurrentPhone = document.getElementById(`employeePhone${strEmployeeId}`).innerText;

    // Ajiltanii odoogiin medeellig huvisagchaas pop up-d huulj haruulna. 
    //Odoogiin medeelel deer zasvar hiih bolomjtoi bolno
    document.getElementById(`editName${strEmployeeId}`).value = strCurrentName;
    document.getElementById(`editId${strEmployeeId}`).value = strCurrentId;
    document.getElementById(`editPosition${strEmployeeId}`).value = strCurrentPosition;
    document.getElementById(`editSsn${strEmployeeId}`).value = strCurrentSsn;
    document.getElementById(`editPhone${strEmployeeId}`).value = strCurrentPhone;
}

// Hereglegchiin zasvarlasan ajiltanii medeelliig hadgalna
function saveChanges(strCardId, strPopupId) {
    // Pop up-iin ID-gaas heddeh ajiltang zasahiig ylgaj avna
    const strEmployeeId = strPopupId.replace('editPopup', '');

    // Odoogiin ajiltanii medeelel deer zasvar hiisnii daraah medeelliig unshij huvisagchid hadgalna
    const strNewName = document.getElementById(`editName${strEmployeeId}`).value;
    const strNewId = document.getElementById(`editId${strEmployeeId}`).value;
    const strNewPosition = document.getElementById(`editPosition${strEmployeeId}`).value;
    const strNewSsn = document.getElementById(`editSsn${strEmployeeId}`).value;
    const strNewPhone = document.getElementById(`editPhone${strEmployeeId}`).value;

    // Huvisagchid hadgalsan shinechilsen ajiltanii medeellee undsen ajiltanii medeelliin hesegt shinechlen tavina
    document.getElementById(`employeeName${strEmployeeId}`).innerText = strNewName;
    document.getElementById(`employeeId${strEmployeeId}`).innerText = strNewId;
    document.getElementById(`employeePosition${strEmployeeId}`).innerText = strNewPosition;
    document.getElementById(`employeeSsn${strEmployeeId}`).innerText = strNewSsn;
    document.getElementById(`employeePhone${strEmployeeId}`).innerText = strNewPhone;

    // Shinechilsen medeelel hadgalagdsanii daraa pop up-iig shuud haana
    closePopup(strPopupId);
}

// Pop up haah funts
function closePopup(strPopupId) {
    document.getElementById(strPopupId).style.display = 'none';
}
