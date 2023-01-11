document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

}

function afegeix(){
    var element = window.prompt("Element a afegir");
    $("ul").append("<li><a>"+element+"</a></li>");
    $("ul").listview("refresh");
}
function borra1(){
    $('li').remove();
}
$('#Afegeix').click(afegeix);
$('#elimina1').click(borra1);