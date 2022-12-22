window.onload = function(){
    window.setInterval(function(){
    let now = new Date();
    let clock = document.getElementById("header__clock");
    clock.innerHTML = now.toLocaleTimeString().slice(0, -3);
    },1000);
  };