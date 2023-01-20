document.addEventListener('deviceready', onDeviceReady, false);
var globalEditElement;
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    actualitza();

}
function Hello(e){
    var caller = e.target || e.srcElement;
    console.log(caller);
}
function afegeix(){
    nomPagina = window.prompt("Element a afegir");
    //var element = $("<li><a href='#page1'>"+nomPagina+"<button>Elimina</button></li>");
    var number = localStorage.length;
    localStorage.setItem(number,nomPagina);
    if(nomPagina!=null){
        /*$("ul").append(element);
        $("button",element).click(elimina);
        $("a",element).click(edita);
        $("ul").listview("refresh");*/
        actualitza();
        alert("Size: "+localStorage.length);
    }
}
function elimina(e){
    $(e.target).parent().remove();
    var nomPagina = $(e.target).parent().clone().children().remove().end().text();
    alert(nomPagina);
    for(var i=0;i<localStorage.length;i++){
        if(localStorage.getItem(i)==nomPagina){
            localStorage.removeItem(i)
        }
    }
    return false;
    
}
function edita(e){
    globalEditElement=e.target;
    var nomPagina = $(e.target).clone().children().remove().end().text();
    console.log(globalEditElement);
    $("input").val(nomPagina);
    nomPagina = $("input").val;
    $("#botoCanvia").click(canviaText);
}
function canviaText(e){
    var nomPagina = $("input").val();
    var element = $("<button>Elimina</button>");
    $(element).click(elimina);
    $(globalEditElement).text(nomPagina);
    $(globalEditElement).append(element);
    document.location="#";
}
function actualitza(e){
    $("ul").children().remove();
    $("ul").listview("refresh");
    for(var i=0;i<localStorage.length;i++){
        var element = $("<li><a href='#page1'>"+localStorage.getItem(i)+"<button>Elimina</button></li>");
        $("ul").append(element);
        $("button",element).click(elimina);
        $("a",element).click(edita);
        $("ul").listview("refresh");
    }
}
$('#Afegeix').click(afegeix);