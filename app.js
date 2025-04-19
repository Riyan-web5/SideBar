const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closetoggle = document.querySelector(".close-btn");

toggle.addEventListener("click", function(){
  if(sidebar.classList.contains("show-sidebar")){
    sidebar.classList.remove("show-sidebar");
  }
  else{
    sidebar.classList.add("show-sidebar");
  }
});

closetoggle.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});