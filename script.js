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
        "https://www.lifewire.com/thmb/wV12830msiJ9sKuqIYeyLU5RLl8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/98033116-56a1ad693df78cf7726cfaba.jpg",
	"img/course-1.jpg",
	"https://i.redd.it/msl53vqmf4xb1.jpg"];

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

