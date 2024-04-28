const imgs =document.querySelectorAll('.header-slider ul img');
const pre_btn =document.querySelector('.control-pre');
const next_btn =document.querySelector('.control-next');

let n=0;

function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }

    imgs[n].style.display = 'block';
}

changeSlide();

pre_btn.addEventListener('click', (e) => {
    if(n > 0){
        n--;
    }else{
        n =imgs.length-1;
    }

    changeSlide();
});

next_btn.addEventListener('click', (e) => {
    if(n < imgs.length-1){
        n++;
    }else{
        n =0;
    }

    changeSlide();
});

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}

//for logout

document.getElementById("log-out").addEventListener("click", function(event) {
    event.preventDefault();
    var confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
      alert("Logged out successfully.");
      // Redirect to logout page or perform logout action here
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const scheduleButton = document.getElementById('scheduleButton');

    scheduleButton.addEventListener('click', function() {
        daySchedule.initPopupWidget({
            url: 'https://nitesh-giri.dayschedule.com' // Replace with your DaySchedule URL
        });
    });
});