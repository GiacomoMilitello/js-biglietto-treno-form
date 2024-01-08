const buttonOk = document.getElementById( "ok" );
const nomePersonaHtml = document.getElementById( "nome" )
const chilometriHtml = document.getElementById( "chilometri" )
const anniHtml = document.getElementById( "anni" )
let numberS = Math.floor(Math.random(0)*10);
console.log("Carrozza:",numberS);
let numberB = Math.floor(Math.random(0)*99999);
console.log("Codice CP:",numberB);


buttonOk.addEventListener( "click", function(){
    let price = (chilometriHtml.value * 0.21)
    console.log("prezzo senza sconti:", price);
    document.getElementById('nome-passeggero').innerHTML= nomePersonaHtml.value;
    document.getElementById('short-number').innerHTML= numberS;
    document.getElementById('long-number').innerHTML= numberB;
    var finalTicket = document.getElementById("final-ticket");
    finalTicket.classList.remove("d-none");

if (anniHtml.value>=18 && anniHtml.value<=65){
    document.getElementById('discount').innerHTML='<p>Biglietto Standard</p>';
    document.getElementById('price-generated').innerHTML='<p> Prezzo: €' + " " + price + '</p>';
} else if (anniHtml.value<18){
    const  juniorDiscount= price * 0.2;
    const juniorPrice = price - juniorDiscount;
    const juniorFormatted = juniorPrice.toFixed(2);
    document.getElementById('discount').innerHTML='<p>Biglietto Minorenni</p>';
    document.getElementById('price-generated').innerHTML='<p> Prezzo: €' + " " + juniorFormatted + '</p>';
    console.log("prezzo scontato per minorenni:", juniorFormatted)
} else {
    const  seniorDiscount= price * 0.4;
    const seniorPrice = price - seniorDiscount;
    const seniorFormatted = seniorPrice.toFixed(2);
    document.getElementById('price-generated').innerHTML='<p> Prezzo: €' + " " + seniorFormatted + '</p>';
    console.log("prezzo scontato per over65:", seniorFormatted)
    document.getElementById('discount').innerHTML='<p>Biglietto Over 65</p>';
}
})
