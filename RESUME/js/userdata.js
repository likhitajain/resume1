// Binding Datas to the respective fields
const dataFirstName = document.querySelector(".user-firstName"),
      dataLastName = document.querySelector(".user-lastName"),
      dataMobileNo = document.querySelector(".user-mobileNo"),
      dataEmailId = document.querySelector(".user-emailId"),
      dataObjective = document.querySelector(".user-objective"),
      dataSummary1 = document.querySelector(".user-summary1"),
      dataSummary2 = document.querySelector(".user-summary2"),
      dataSummary3 = document.querySelector(".user-summary3"),
      dataSkills = document.querySelector(".user-skills"),
      dataDegree = document.querySelector(".user-degree"),
      dataDegreeInstitution = document.querySelector(".user-institutionName"),
      dataDegreeYear = document.querySelector(".user-degreeYear"),
      dataCgpa = document.querySelector(".user-cgpa"),
      dataHsc = document.querySelector(".user-hsc"),
      dataHscYear = document.querySelector(".user-hscYear"),
      dataHscPercentage = document.querySelector(".user-hscPercentage"),
      dataSsc = document.querySelector(".user-ssc"),
      dataSscYear = document.querySelector(".user-sscYear"),
      dataSscPercentage = document.querySelector(".user-sscPercentage"),
      dataAddress = document.querySelector(".user-address"),
      dataAddress2 = document.querySelector(".user-address2"),
      dataCity = document.querySelector(".user-city"),
      dataState = document.querySelector(".user-state"),
      dataZipcode = document.querySelector(".user-zipcode"),
      dataCity1 = document.querySelector(".user-city1"),
      dataUserDate = document.querySelector(".user-date"),
      dataFirstNameCaps = document.querySelector(".user-firstNameCaps"),
      dataLastNameCaps = document.querySelector(".user-lastNameCaps");
     
// Getting the user information from session
const data = JSON.parse(window.sessionStorage.getItem("userData"));
console.log(data, "user information");

// Onload binding the textContent to the DOM
window.onload = (event) => {
    console.log('The page has fully loaded');
    dataFirstName.textContent = data.firstName;
    dataLastName.textContent = data.lastName;
    dataMobileNo.textContent = data.mobileNo;
    dataEmailId.textContent = data.email;
    dataObjective.textContent = data.objective;
    dataSummary1.textContent = data.summary1;
    dataSummary2.textContent = data.summary2;
    dataSummary3.textContent = data.summary3;
    dataSkills.textContent = data.skills;
    dataDegree.textContent = data.degree;
    dataDegreeInstitution.textContent = data.institutionName;
    dataDegreeYear.textContent = data.degreeYear;
    dataCgpa.textContent = data.cgpa;
    dataHsc.textContent = data.hsc;
    dataHscYear.textContent = data.hscYear;
    dataHscPercentage.textContent = data.hscPercentage;
    dataSsc.textContent = data.ssc;
    dataSscYear.textContent = data.sscYear;
    dataSscPercentage.textContent = data.sscPercentage;
    dataAddress.textContent = data.address;
    dataAddress2.textContent = data.address2;
    dataCity.textContent = data.city;
    dataState.textContent = data.state;
    dataZipcode.textContent = data.zipcode;
    dataCity1.textContent = data.city;
    dataUserDate.textContent = new Date().toDateString();
    dataFirstNameCaps.textContent = data.firstName.toUpperCase();
    dataLastNameCaps.textContent = data.lastName.toUpperCase();
};

// Generating PDF
document.getElementById("pdfButton").addEventListener('click', function(){
    const element = document.querySelector('#pdfDownloadElement');
    const hideButtonElement = document.getElementById('pdfButton');
    const opt = {
        filename: `${data.firstName.replace(data.firstName[0], data.firstName[0].toLowerCase())}_profile.pdf`,
        margin: 2,
        jsPDF: {format: 'letter', orientation: 'portrait'}
      };
    html2pdf().set(opt).from(element).save();
    hideButtonElement.style.display = 'none'
});
