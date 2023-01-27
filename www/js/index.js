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
    var number = localStorage.length;
    localStorage.setItem(number,nomPagina);
    if(nomPagina!=null){
        actualitza();
    }
}
function elimina(e){
    var id=$(e.target).parent().parent().attr("id");
    for(var i=0;i<localStorage.length;i++){
        if(i==id){
            localStorage.removeItem(i);
        }
    }
    actualitza();
    return false;
    
}
function edita(e){
    globalEditElement=$(e.target).parent().attr("id");;
    var nomPagina = $(e.target).clone().children().remove().end().text();
    console.log(globalEditElement);
    $("input").val(nomPagina);
    nomPagina = $("input").val;
    $("#botoCanvia").click(canviaText);
}
function canviaText(e){
    var nomPagina = $("input").val();
    for(var i=0;i<localStorage.length;i++){
        if(i==globalEditElement){
            localStorage.setItem(i,nomPagina);
        }
    }
    actualitza();
    document.location="#";
}
function actualitza(e){
    $("ul").children().remove();
    $("ul").listview("refresh");
    if(localStorage!=null){
        for(var i=0;i<localStorage.length;i++){
            var element = $("<li id="+i+"><a href='#page1'>"+localStorage.getItem(i)+"<button>Elimina</button></li>");
            $("ul").append(element);
            $("button",element).click(elimina);
            $("a",element).click(edita);
            $("ul").listview("refresh");
        }
    }
}
$('#Afegeix').click(afegeix);