functifunction getFormvalue() {
    //Write your code here
	var firstName = document.forms["form1"]["fname"].value;
    var lastName = document.forms["form1"]["lname"].value;

	alert(firstName + " " + lastName);
}