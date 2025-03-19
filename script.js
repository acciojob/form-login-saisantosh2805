function getFormvalue(event) {
  event.preventDefault();//Write your code here
const form= document.getElementById("form1");  
  const firstName=document.getElementById("fname").value;
  const lastName=document.getElementById("lname").value;
  alert(`${firstName}${lastName}`);
}
