var hr= document.getElementById("hh");
var mm= document.getElementById("mm");
var ss= document.getElementById("ss");
var l=document.getElementById("l");
var dd= document.getElementById("dd");
var mon= document.getElementById("mon");
var yy= document.getElementById("yy");

var a=function (){
    const b=new Date();
    var c=b.getHours();
    var d=b.getMinutes();
    var e=b.getSeconds();
    var f=b.getDay();
    var g=b.getMonth();
    var h=b.getFullYear();

    var x="am";
    if(c>12){
        x="pm";
        c=c-12;
    }
    
    hr.innerText=c;
    mm.innerText=d;
    ss.innerText=e;
    l.innerText=x;
    dd.innerText=f;
    mon.innerText=g+1;
    yy.innerText=h;
}
a()
setInterval(a,1000)
