document.addEventListener("DOMContentLoaded", () => {
    document.body.style.userSelect = "none";
});

function toggleCarousel(){
    const dashboard = document.getElementsByClassName("dashboard");
    const carousel = document.getElementsByClassName("carousel");
    if(dashboard.enabled){
      carousel.enabled = true;
      dashboard.enabled = false;
    } else{
      carousel.enabled = false;
      dashboard.enabled = true;
    }
  }
  
  document.getElementById("viewAll")
