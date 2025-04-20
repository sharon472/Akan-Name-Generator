document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    getAkanName(); 
  });
  function getAkanName(){
const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  
  if (day < 1 || day > 31) {
    alert("kindly enter date (1-31).");
    return;
  }

  if (month < 1 || month > 12) {
    alert("kindly enter month (1-12).");
    return;
  }
  if (!gender) {
    alert("kindly select a gender.");
    return;
  }
  const CC = Math.floor(year / 100);
const YY = year % 100;             
const MM = month;
const DD = day;

let d = (( (CC / 4) - 2 * CC - 1 ) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD ) % 7;
let dayIndex = (( Math.floor(d)%7)+7)%7;

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maleNames =   ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
  const bornDay = daysOfWeek[dayIndex];

  const resultText = `You were born on a ${bornDay}. Your Akan name is ${akanName}.`;
  document.getElementById("result").innerText = resultText;
}
