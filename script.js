function getFormvalue(event) {
 
  event.preventDefault();

 
  const form = document.getElementById("form1");

 
  const firstName = form.elements["fname"].value.trim();
  const middleName = form.elements["mname"].value.trim();
  const lastName = form.elements["lname"].value.trim();

  
  if (!firstName || !lastName) {
    alert("Please fill in both First Name and Last Name fields.");
    return;
  } 
	const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
  alert(fullName);
}document.getElementById("form1").addEventListener("submit", getFormvalue);
