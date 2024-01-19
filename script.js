const Load = ()=>{
	var preload =document.getElementById("preload");
	var mainbody=document.getElementById("body")
	var timer=3000;
	setTimeout(function(){
   preload.style.display="none";
   mainbody.style.display="block";
	}, timer)




var topBanner=["img/team.jpg",
	"https://dayshadevops.co.uk/wp-content/uploads/it-ideas.jpg",
	"img/course-1.jpg"];

var random=Math.floor(Math.random() * topBanner.length);

var hero=document.getElementById("hero");
hero.style.background="url('"+topBanner[random]+"') top center";

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

