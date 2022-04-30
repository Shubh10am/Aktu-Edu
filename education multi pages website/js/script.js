let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
$(document).ready(function () {
  $(".box").slice(0, 3).show();
  $("#loadMore").on("click", function (e) {
      e.preventDefault();
      console.log("Clicked..!!!")
      $(".box:hidden").slice(0, 6).slideDown();
      if ($(".box:hidden").length == 0) {
          $("#loadMore").text("No Content").addClass("noContent");
      }
  });

})