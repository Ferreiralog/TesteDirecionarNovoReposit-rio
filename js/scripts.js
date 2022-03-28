var btn = document.querySelector("#link-mais")
var ponto = document.querySelector("#ponto");
var texto = document.querySelector("#texto");

btn.addEventListener("click",function(event) {
	   event.preventDefault();
       if(ponto.style.display === "inline")
		  ponto.style.display ='none';
			});
