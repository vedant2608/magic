//Step one script
document.getElementById("btn1").onclick=function(){
	 var ch=document.getElementById("jsa").value;
     if(ch<100000||ch>999999){
		 document.getElementById("jsa").style.backgroundColor='red';
		 document.getElementById("jsa").style.color='White';
		 document.getElementById("jsa").value="Invalid Entry"
		 document.getElementById("jsans").value="Oops!! TRY AGAIN";
	 }
	 else{
           document.getElementById("jsa").style.backgroundColor='White';
		   document.getElementById("jsa").style.color='black';
		  document.getElementById("jsa").value=ch;
		  if(ch==100000||ch==100001)
		  {
			  document.getElementById("jsans").value="20000"+(ch-2);
		  }else{
			  document.getElementById("jsans").value="2"+(ch-2); 
		  }
		 }
}
//step 2 script
document.getElementById("btn2").onclick=function(){
	 var ch=document.getElementById("jsb").value;
     if(ch<100000||ch>999999){
		 document.getElementById("jsb").style.backgroundColor='red';
		 document.getElementById("jsb").style.color='White';
		 document.getElementById("jsb").value="Invalid Entry"
		 document.getElementById("jsc").value="Oops!! Try again";
	 }
	 else{
           document.getElementById("jsb").style.backgroundColor='White';
		   document.getElementById("jsb").style.color='black';
		  document.getElementById("jsb").value=ch;
		   document.getElementById("jsc").value=999999-ch;   
		 }
}
//step 3 script
document.getElementById("btn3").onclick=function(){
	 var ch=document.getElementById("jsd").value;
     if(ch<100000||ch>999999){
		 document.getElementById("jsd").style.backgroundColor='red';
		 document.getElementById("jsd").style.color='White';
		 document.getElementById("jsd").value="Invalid Entry"
		 document.getElementById("jse").value="Oops!!Try again";
	 }
	 else{
           document.getElementById("jsd").style.backgroundColor='White';
		   document.getElementById("jsd").style.color='black';
		  document.getElementById("jsd").value=ch;
		   document.getElementById("jse").value=999999-ch;   
		 }
}
//final check script
document.getElementById("btn4").onclick=function(){
    if(document.getElementById("jsans").value==document.getElementById("jscheck").value){
		  window.location="congo.html";
	}
	
}