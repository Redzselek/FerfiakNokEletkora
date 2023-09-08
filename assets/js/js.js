var adatok = []
var ferfiszam
var noszam
var eletkor
function Ok() {
    var obj = {
      ferfi: document.getElementById("ferfi").checked,
      no: document.getElementById("no").checked,
      eletkor: parseInt(document.getElementById("Eletkor").value)
    };
    adatok.push(obj);
    /* var ferfiszam = document.getElementById("ferfiszam").innerHTML = adatok.ferfi.count()
    var noszam = document.getElementById("noszam").innerHTML = adatok.no.count() */

     
    for (let i = 0; i < adatok.length; i++) 
    {
        if (adatok[i].ferfi == true) {
            ferfiszam++    
        }
        else{
            noszam++
        }
        eletkor += adatok[i].eletkor
    }
    document.getElementById("ferfiszam").innerHTML = ferfiszam
    document.getElementById("noszam").innerHTML = noszam
    document.getElementById("ferfiatlag").innerHTML = eletkor
    document.getElementById("noiatlag").innerHTML = eletkor
    
}