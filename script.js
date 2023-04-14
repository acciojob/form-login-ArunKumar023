function getFormvalue() {
    //Write your code here
  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

