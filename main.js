function check(form) {

  if (form.userid.value == "admin" && form.pwd.value == "noahgrocery"){
      form.action = "home.html";
      return true;
  }
  else if(form.userid.value == "" && form.pwd.value == ""){
      form.action = "home.html";
      return true;
  } else {
    alert("Incorrect Password or Username")
    return false;
  }
}
