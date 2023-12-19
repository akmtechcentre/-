const Load = ()=>{
	var preload =document.getElementById("preload");
	var mainbody=document.getElementById("body")
	var timer=3000;
	setTimeout(function(){
   preload.style.display="none";
   mainbody.style.display="block";
	}, timer)
}

var brand="AKM IT SOLUTION CENTRE";


function Message(){
	var message_input=document.getElementById("send-message");
	message_input.focus();
}


function Msgfield(e){
	e.style.height="1px"
	e.style.height=(e.scrollHeight)+"px";
}
