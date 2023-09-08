var adatok = []
var atlagferfi = 0
var atlagnoi = 0
function Ok() {
    var ferfiszam = 0
    var noszam = 0
    var ferfieletkor = 0
    var noieletkor = 0
    var obj = {
      ferfi: document.getElementById("ferfi").checked,
      no: document.getElementById("no").checked,
      eletkor: parseInt(document.getElementById("Eletkor").value)
    };
    adatok.push(obj);

    for (let i = 0; i < adatok.length; i++) 
    {
        if (adatok[i].ferfi == true) {
            ferfiszam++
            ferfieletkor += adatok[i].eletkor
        }
        else
        {
            noszam++
            noieletkor += adatok[i].eletkor
        }
    }
    AtlagElet(ferfieletkor, ferfiszam, noieletkor, noszam)
    document.getElementById("ferfiszam").innerHTML = ferfiszam
    document.getElementById("noszam").innerHTML = noszam
    document.getElementById("ferfiatlag").innerHTML = atlagferfi
    document.getElementById("noatlag").innerHTML = atlagnoi
    
}


function AtlagElet(ferfieletkor, ferfiszam, noieletkor, noszam) 
{
    atlagferfi = ferfieletkor/ferfiszam    
    atlagnoi = noieletkor/noszam
}