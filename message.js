var inputtxt=document.querySelector('#textbox');
var enterbtn=document.querySelector('#enterbtn');
var msgout=document.querySelector('#msgout');

enterbtn.addEventListener("click",msgsent);

function msgsent(){
	let content=inputtxt.value ;
	if(content!=""){
    msgout.innerHTML=content;
	inputtxt.value="";
	
 }else
 {
	 alert("please enter valid msg")
 }

}