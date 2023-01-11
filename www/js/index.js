document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

}

function afegeix(){
    var element = window.prompt("Element a afegir");
    $("#listview").append("<li><a>"+element+"</a></li>");
    $("#listview").listview("refresh");
}
$('#Afegeix').click(afegeix);