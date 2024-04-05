const firebaseConfig = {
    apiKey: "AIzaSyCNStfRDVgJE5gnYqq-KYuoSiD9_bgQMhY",
    authDomain: "regsitration-form2.firebaseapp.com",
    databaseURL: "https://regsitration-form2-default-rtdb.firebaseio.com",
    projectId: "regsitration-form2",
    storageBucket: "regsitration-form2.appspot.com",
    messagingSenderId: "154280474122",
    appId: "1:154280474122:web:ea4384b7542354377891f3",
    measurementId: "G-BV65F60ZSD"
  };

  //initialize firebase 
  firebase.initializeApp(firebaseConfig);

  // reference your database
var registrationformDb = firebase.database().ref('registrationform');

document.getElementById('registrationForm').addEventListener('submit',submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var studentId = getElementVal("studentID");
    var year = getElementVal("studyingYear");
    var branch = getElementVal("branch");
    var phone = getElementVal("phone");
    var email = getElementVal("email");

    saveMeassages(name,studentID,year,branch,phone,email);

    //enable alert]
    document.querySelector('.alert').style.diaplay = "block";

    //rempve the alert
    setTimeout(() => {
        document.querySelector('.alert').style.diaplay = "none";
    },3000);

    //reset the form 
    document.getElementById("registrationForm").reset();
    //console.log(name,studnetid,year,branch,phoneno,emailid)
}

const saveMeassages = (name, studentID, year, branch, phone, email) => {
    var newRegistrationForm = registrationformDb.push();
    newRegistrationForm.set({
        name: name,
        studentId: studentID,
        year: year,
        branch: branch,
        phone: phone,
        email: email,
    });
}
const getElementVal =  (id) => {
    return document.getElementById(id).value;
}