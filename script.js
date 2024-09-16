const birthDate = new Date('2004-07-26');
const today = new Date();
const deathDate = new Date(birthDate.getFullYear() + 25, birthDate.getMonth(), birthDate.getDate());

const totalWeeks = Math.floor((deathDate - birthDate) / (1000 * 60 * 60 * 24 * 7)); // Total weeks (70 years)
const completedWeeks = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 7)); // Completed weeks till today

const weekContainer = document.getElementById('weekContainer');
const total_week_div = document.getElementById('total-weeks');
const completed_week_div = document.getElementById('completed-weeks');
const remaining_week_div = document.getElementById('remaining-weeks');

const remaining = totalWeeks-completedWeeks

completed_week_div.innerHTML = "Completed : "+completedWeeks
total_week_div.innerHTML ="Total Weeks : "+ totalWeeks
remaining_week_div.innerHTML = "Remainng : "+remaining

for (let i = 0; i <= totalWeeks; i++) {
  const weekDiv = document.createElement('div');

  weekDiv.innerHTML = i+1
  weekDiv.classList.add('week');

  if (i < completedWeeks) {
    weekDiv.classList.add('completed');
  } else if (i === completedWeeks) {
    weekDiv.classList.add('current'); // Mark the current week
  } else {
    weekDiv.classList.add('upcoming');
  }

  weekContainer.appendChild(weekDiv);
}


function SocialMediaDirect(num){

const linkedIn = "https://www.linkedin.com/in/muhammed-rifan-k-638074257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "

if(num==1){
window.open(linkedIn,'_blank')
}
else if(num===2){
  window.open("https://github.com/muhammedrifankallayi",'_blank')
}
else if(num==3){
window.open(linkedIn,'_blank')
}else
if(num==4){
  window.open("https://leetcode.com/u/rifanax3/",'_blank')
}
 

}