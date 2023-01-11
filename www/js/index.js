document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

}
function Hello(e){
    var caller = e.target || e.srcElement;
    console.log( caller );
}
function afegeix(){
    var text = window.prompt("Element a afegir");
    var element = $("<li><a>"+text+"</a><button>Elimina</button></li>");
    $("ul").append(element);
    $("button",element).click(elimina);
    $("ul").listview("refresh");
}
function elimina(){
    $(event.srcElement).remove();
    
}
$('#Afegeix').click(afegeix);