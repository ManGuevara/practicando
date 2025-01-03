//1era forma de colocar la fecha

const options = {weekday: 'long', day:'numeric', month:'long', year:'numeric'};
document.getElementById('currentdate').textContent =new Date().toLocaleDateString('en-US', options);

//2da forma de colocar fecha

const daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthnames = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ];

const todaysdate = new Date();
const dayname = daynames[todaysdate.getDay()];
const monthname = monthnames[todaysdate.getMonth()];
const currentdate = dayname + "," + todaysdate.getDate() + " " + monthname + "," + todaysdate.getFullYear();

document.getElementById('currentdate').textContent =currentdate;

