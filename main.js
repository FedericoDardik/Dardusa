document.addEventListener("DOMContentLoaded", function() {
  var div1 = document.getElementById("icon-instagram");
  var div2 = document.getElementById("icon-twitter");
  var div3 = document.getElementById("icon-youtube");
  var div4 = document.getElementById("icon-twitch");
  var div5 = document.getElementById("icon-tiktok");
  var div6 = document.getElementById("icon-work-connect");
  //-------------------------------------------------------
  var div7 = document.getElementById("phone-instagram");
  var div8 = document.getElementById("phone-twitter");
  var div9 = document.getElementById("phone-youtube");
  var div10 = document.getElementById("phone-twitch");
  var div11 = document.getElementById("phone-tiktok");
  var div12 = document.getElementById("phone-work-connect");

  div1.addEventListener("click", function() {
    div7.style.zIndex = "10";
    div8.style.zIndex = "1";
    div9.style.zIndex = "1";
    div10.style.zIndex = "1";
    div11.style.zIndex = "1";
    div12.style.zIndex = "1";
  });

div2.addEventListener("click", function() {
  div7.style.zIndex = "1";
  div8.style.zIndex = "10";
  div9.style.zIndex = "1";
  div10.style.zIndex = "1";
  div11.style.zIndex = "1";
  div12.style.zIndex = "1";
});

div3.addEventListener("click", function() {
  div7.style.zIndex = "1";
  div8.style.zIndex = "1";
  div9.style.zIndex = "10";
  div10.style.zIndex = "1";
  div11.style.zIndex = "1";
  div12.style.zIndex = "1";
});

div4.addEventListener("click", function() {
  div7.style.zIndex = "1";
  div8.style.zIndex = "1";
  div9.style.zIndex = "1";
  div10.style.zIndex = "10";
  div11.style.zIndex = "1";
  div12.style.zIndex = "1";
});

div5.addEventListener("click", function() {
  div7.style.zIndex = "1";
  div8.style.zIndex = "1";
  div9.style.zIndex = "1";
  div10.style.zIndex = "1";
  div11.style.zIndex = "10";
  div12.style.zIndex = "1";
});

div6.addEventListener("click", function() {
  div7.style.zIndex = "1";
  div8.style.zIndex = "1";
  div9.style.zIndex = "1";
  div10.style.zIndex = "1";
  div11.style.zIndex = "1";
  div12.style.zIndex = "10";
});
});





