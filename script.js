function getFormvalue() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  
  alert(`${firstName} ${lastName}`);
}

const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  getFormvalue();
});
