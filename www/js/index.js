document.addEventListener('deviceready', onDeviceReady, false);
var nomPagina;
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

}
function Hello(e){
    var caller = e.target || e.srcElement;
    console.log(caller);
}
function afegeix(){
    nomPagina = window.prompt("Element a afegir");
    var element = $("<li><a href='#page1'>"+nomPagina+"<button>Elimina</button></li>");
    if(nomPagina!=null){
        $("ul").append(element);
        $("button",element).click(elimina);
        $("a",element).click(edita);
        $("ul").listview("refresh");
    }
}
function elimina(e){
    $(e.target).parent().remove();
    return false;
    
}
function edita(e){
    nomPagina = $(e.target).parent().text();
    $("input").val(nomPagina);
    nomPagina = $("input").val;
    $("a").click($(e.target).parent().text(nomPagina));
}
$('#Afegeix').click(afegeix);