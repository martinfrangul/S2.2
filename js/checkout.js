function validate(event) {
  event.preventDefault();
  
  var error = 0;

  var fName = document.getElementById("fName");
  var fLastN = document.getElementById("fLastN");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  var errorName = document.getElementById("errorName");
  var errorLastN = document.getElementById("errorLastN");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  if (fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
    error++;
    fName.classList.add("is-invalid");
    errorName.style.display = "block";
  } else {
    fName.classList.remove("is-invalid");
    fName.classList.add("is-valid");
    errorName.style.display = "none";
  }

  if (fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
    error++;
    fLastN.classList.add("is-invalid");
    errorLastN.style.display = "block";
  } else {
    fLastN.classList.remove("is-invalid");
    fLastN.classList.add("is-valid");
    errorLastN.style.display = "none";
  }

  if (!fEmail.value.includes("@") || fEmail.value.length < 3) {
    error++;
    fEmail.classList.add("is-invalid");
    errorEmail.style.display = "block";
  } else {
    fEmail.classList.remove("is-invalid");
    fEmail.classList.add("is-valid");
    errorEmail.style.display = "none";
  }

  if (fAddress.value.length < 3) {
    error++;
    fAddress.classList.add("is-invalid");
    errorAddress.style.display = "block";
  } else {
    fAddress.classList.remove("is-invalid");
    fAddress.classList.add("is-valid");
    errorAddress.style.display = "none";
  }

  if (
    !/\d/.test(fPassword.value) ||
    !/[a-zA-Z]/.test(fPassword.value) ||
    fPassword.value.length < 4 ||
    fPassword.value.length > 8
  ) {
    error++;
    fPassword.classList.add("is-invalid");
    errorPassword.style.display = "block";
  } else {
    fPassword.classList.remove("is-invalid");
    fPassword.classList.add("is-valid");
    errorPassword.style.display = "none";
  }

  if (!/^\d{9}$/.test(fPhone.value)) {
    error++;
    fPhone.classList.add("is-invalid");
    errorPhone.style.display = "block";
  } else {
    fPhone.classList.remove("is-invalid");
    fPhone.classList.add("is-valid");
    errorPhone.style.display = "none";
  }

    if (error === 0) {
		var form = document.querySelector(".form");
		form.classList.add("was-validated");
		alert('Formulario completado correctamente!')
		form.submit();
	  } else {
		var form = document.querySelector(".form");
		form.classList.remove("was-validated");
	  }
}