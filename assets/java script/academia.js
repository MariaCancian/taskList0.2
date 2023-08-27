//amigos e amigas agora iremos dar inicio a nossa tela hibrida
 function showUser(){
    document.getElementById("main-div").classList.add("hidden");
    document.getElementById("sub-div").classList.remove("hidden");
 }

 function showRegister(){
    document.getElementById("main-div").classList.remove("hidden");
    document.getElementById("sub-div").classList.add("hidden");
 }

 function registerMan(){
    document.getElementById("main-div2").classList.add("hidden");
    document.getElementById("main-div3").classList.remove("hidden");
 }

 function backBackPage(){
    document.getElementById("main-div3").classList.add("hidden");
    document.getElementById("main-div2").classList.remove("hidden");
    console.log("passou pela função showRegister")
 }

 function registerHoman(){
   document.getElementById("main-div3").classList.add("hidden");
   document.getElementById("main-div2").classList.remove("hidden");
   console.log("passou pela função showRegister")
}

 


