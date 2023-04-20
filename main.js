function check(form) {

  if (form.userid.value == "admin" && form.pwd.value == "noahgrocery"){
      form.action = "https://sites.google.com/view/unitedmustangbank/admin";
      return true;
  }
  else if(form.userid.value == "" && form.pwd.value == ""){
      form.action = "page";
      return true;
  } else {
    alert("Incorrect Password or Username")
    return false;
  }
}
