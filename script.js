function getFormvalue(event) {
  event.preventDefault();//Write your code here
const form= document.getElementById("form1");  
  const firstName=form.elements["fname"].value.trim();
  const lastName=form.elements["lname"].value.trim();	 
  if (!firstName || !lastName) {
    alert("Please fill in both First Name and Last Name fields.");
    return;
  }
  const fullName = ${firstName} ${lastName};	alert(`${firstName}${lastName}`);
alert(fullName)
}
