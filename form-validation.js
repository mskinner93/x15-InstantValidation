function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  var txt = userEntered;
  var passTxt = passEntered;
  var convertLower = passEntered.toLowerCase();

  if(txt.length < 6 )
  {
  document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if( userEntered.includes(" ") )
  {
    document.getElementById("usernameError").innerHTML="Username must not contain any spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  //Show message that there is an error with the password...
  if(convertLower == "password")
  {
  document.getElementById("passwordError").innerHTML="Password cannot be " + passEntered + ".";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password cannot be the same as username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passTxt.length < 5)
  {
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passTxt.length > 21)
  {
    document.getElementById("passwordError").innerHTML="Password must be no more then 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
