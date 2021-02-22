 document.addEventListener("DOMContentLoaded", start2);

 //Der klikkes på burgermenuen
 function start2() {
     document.querySelector("#burgermenu").addEventListener("click", onClickMenu);
 }

 //Når der er klikket på burgermenuen, benyttes css-toggle-classes til at ændre udseende på menuen
 function onClickMenu() {
     document.querySelector("#burgermenu_container").classList.toggle("change");
     document.querySelector(".burgermenu_link").classList.toggle("change");
     document.querySelector(".burger_bck").classList.toggle("change_img");
     document.querySelector("#burger1").classList.toggle("change1");
     document.querySelector("#burger2").classList.toggle("change1");
     document.querySelector("#burger3").classList.toggle("change1");
 }
