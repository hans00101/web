


var m= document.querySelector("h1")
m.textContent="A internet"
function cliqueme(){
    var m= document.querySelector("h1")
    m.textContent="O que e internet"
}
var mi= document.querySelector("h1")
mi.onclick=cliqueme
var wimg= document.querySelector("img")
wimg.onmousedown = altetarconteudo
function altetarconteudo(p){
    var mh1= document.querySelector("h1")
    var mp= document.querySelector("p")
    var x = p.clientx 
    var y = p.clienty
    if(x>=0 && x<150 && y>=0 && y<100){
        mh1.textContent="Monitor"
        mp.textContent="O monitor e ..."
    } elseif(x>=150 && x<300 && y>=150 && y<200)
        mh1.textContent="mouse"
        mp.textContent="o mouse..."
    }
    