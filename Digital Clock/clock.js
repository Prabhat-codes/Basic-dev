function time(){
    d = new Date();
    var flag;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    if (h > 12) {
        flag="PM";
        h = h - 12;
    }
    else{
        flag="AM";
    }
    if (m > 60) {
        h += 1;
        m = m - 60;
    }
    if (s > 60) {
        m += 1;
        s = s - 60;
    }
    if(m<10){
        m=m.toString();
        m="0"+m;
    }
    if(s<10){
        s=s.toString();
        s="0"+s;
    }
    if(h<10){
        h=h.toString();
        h="0"+h;
    }
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + flag;
}
setInterval(time, 1000);