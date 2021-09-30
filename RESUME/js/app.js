// User Information
// Getting the DOM Elements
const firstName = document.querySelector("#firstName"),
    lastName = document.querySelector("#lastName"),
    email = document.querySelector("#userEmail"),
    mobileNo = document.querySelector("#userMobile"),
    objective = document.querySelector("#objective"),
    summary1 = document.querySelector("#summary1"),
    summary2 = document.querySelector("#summary2"),
    summary3 = document.querySelector("#summary3"),
    skills = document.querySelector("#skills"),
    degree = document.querySelector("#degree"),
    institutionName = document.querySelector("#institutionName"),
    degreeYear = document.querySelector("#passingYearDegree"),
    cgpa = document.querySelector("#cgpa"),
    hsc = document.querySelector("#hsc"),
    hscYear = document.querySelector("#passingYearHsc"),
    hscPercentage = document.querySelector("#hscPercentage"),
    ssc = document.querySelector("#ssc"),
    sscYear = document.querySelector("#passingYearSsc"),
    sscPercentage = document.querySelector("#sscPercentage"),
    address = document.querySelector("#inputAddress"),
    address2 = document.querySelector("#inputAddress2"),
    city = document.querySelector("#inputCity"),
    state = document.querySelector("#inputState"),
    zipcode = document.querySelector("#inputZip"),
    errorMsg = document.querySelector("#errorDOM"),
    submitButton = document.querySelector("#submitButton");

//Submit Handler
submitButton.addEventListener('click', onSubmitHandler);

function onSubmitHandler(e){
    alert("Hey Success");
    //Empty - Display Error Message
    if(firstName.value !== "" && lastName.value !== "" && email.value !== "" && mobileNo.value !== "" && objective.value !== "" && summary1.value !== "" && summary2.value !== "" && summary3.value !== "" && skills.value !== "" && degree.value !== "" && institutionName.value !== "" && degreeYear.value !== "" && cgpa.value !== "" && hsc.value !== "" && hscYear.value !== "" && hscPercentage.value !== "" && ssc.value !== "" && sscYear.value !== "" && sscPercentage.value !== "" && address.value !== "" && address2.value !== "" && city.value !== "" && state.value !== "" && zipcode.value !== ""){
        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            mobileNo: mobileNo.value,
            objective: objective.value,
            summary1: summary1.value,
            summary2: summary2.value,
            summary3: summary3.value,
            skills: skills.value,
            degree: degree.value,
            institutionName: institutionName.value,
            degreeYear: degreeYear.value,
            cgpa: cgpa.value,
            hsc: hsc.value,
            hscYear: hscYear.value,
            hscPercentage: hscPercentage.value,
            ssc: ssc.value,
            sscYear: sscYear.value,
            sscPercentage: sscPercentage.value,
            address: address.value,
            address2: address2.value,
            city: city.value,
            state: state.value,
            zipcode: zipcode.value
        };
        window.sessionStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "/userdata.html";
    }else{
        errorMsg.classList.remove("d-none");
        setTimeout(function(){errorMsg.classList.add("d-none"); }, 2000);
    }
    e.preventDefault();
}