if(true){
	var x=5;
}
if(true){
	let y=6;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	
	let inp=document.getElementById("inp").value;
	let inp2=document.getElementById("inp2").value;
	let txt=Number(inp)+Number(inp2);
	
  alert(txt);
}, false);

var request=new XMLHttpRequest();
const URL="https://qiita.com/api/v2/items/951cee065d7c20e17a0e" //自分が選んだ記事のid
request.open('GET',URL,true);
request.onload=function(){
	console.log(this.response);
}
request.send();
