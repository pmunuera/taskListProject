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
    var element = $("<li><a href='#page1'>"+text+"<button id='Elimina'>Elimina</button><button id='Edita'>Edita</button></a></li>");
    if(text!=null){
        $("ul").append(element);
        $("#Elimina",element).click(elimina);
        $("#Edita",element).click(edita);
        $("ul").listview("refresh");
    }
}
function elimina(e){
    $(e.target).parent().remove();
    return false;
    
}
function edita(){
    var text = window.prompt("Afegeix descripcio");
    $(".ui-content").text(text);
    return false;
}
$('#Afegeix').click(afegeix);