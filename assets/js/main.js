const ButtonOk = document.getElementById( "ok" );
const NomePersonaHtml = document.getElementById( "nome" )
const ChilometriHtml = document.getElementById( "chilometri" )
const AnniHtml = document.getElementById( "anni" )


ButtonOk.addEventListener( "click", function(){
    let price = (ChilometriHtml.value * 0.21)
    console.log("prezzo senza sconti:", price);
    document.getElementById('nome-passeggero').innerHTML= NomePersonaHtml;

if (AnniHtml>=18 && AnniHtml<=65){
    document.getElementById('price-generated').innerHTML='<p> Prezzo:' + " " + price + '</p>';
} else if (AnniHtml<18){
    const  juniorDiscount= price * 0.2;
    const juniorPrice = price - juniorDiscount;
    const juniorFormatted = juniorPrice.toFixed(2);
    document.getElementById('price-generated').innerHTML='<p> Prezzo:' + " " + juniorFormatted + '</p>';
    console.log("prezzo scontato per minorenni:", juniorFormatted)
} else {
    const  seniorDiscount= price * 0.4;
    const seniorPrice = price - seniorDiscount;
    const seniorFormatted = seniorPrice.toFixed(2);
    document.getElementById('price-generated').innerHTML='<p> Preo:' + " " + seniorFormatted + '</p>';
    console.log("prezzo scontato per over65:", seniorFormatted)
    document.getElementById('nome-passeggero').innerHTML= NomePersonaHtml;
}
})
