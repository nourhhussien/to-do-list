


// to add close icon to any test

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

//   /u00D7 is the code in js to add close icon
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


//   nageb el class eli 3amlhn eli asmo close fo2 w na3ml display (none) le ay div parent (babh) lel class close

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}





// hena yaa bttt y nouran 3amlt function ay li aclick 3alh gabt el awl ul w ba3d keda nafzt 3alhaaaa  kamal dah asm3 el function ._> w lw 3amlt click tani ttl8i


// ya3ni abdl li be checked w el thoughline

var list = document.querySelector('ul');
list.addEventListener('click', function(kamal) {
  if (kamal.target.tagName === 'LI') {
    kamal.target.classList.toggle('checked');
  }
}, false);




  
// hena 3amlt function tazwd li 3la el list bat3ti 

function newtask(){

    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var Tinput = document.createTextNode(inputValue);
    li.appendChild(Tinput);

    if (inputValue === '') {
        alert("you must read something of your task ");
      } else {
        document.getElementById("list").appendChild(li);
      }
       document.getElementById("task").value = "";
       



       var myNodelist = document.getElementsByTagName("li");
       var i;
       for (i = 0; i < myNodelist.length; i++) {
         var span = document.createElement("SPAN");
         var txt = document.createTextNode("\u00D7");
       
       //   /u00D7 is the code in js to add close icon
         span.className = "close";
         span.appendChild(txt);
         myNodelist[i].appendChild(span);
       }
       
       
       //   nageb el class eli 3amlhn eli asmo close fo2 w na3ml display (none) le ay div parent (babh) lel class close
       
       var close = document.getElementsByClassName("close");
       var i;
       for (i = 0; i < close.length; i++) {
         close[i].onclick = function() {
           var div = this.parentElement;
           div.style.display = "none";
         }
       }
       


   

}