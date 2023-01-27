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
    nomTask= window.prompt("Element a afegir");
    var number = maxKey()+1;
    
    localStorage.setItem(number,nomTask);
    if(nomTask!=null){
        actualitza();
    }
}
function elimina(e){
    var id=$(e.target).parent().parent().attr("id");
    for(var i=0;i<maxKey()+1;i++){
        if(i==id){
            localStorage.removeItem(i);
            console.log(localStorage.getItem(i))
            alert("Removing item: "+i);
        }
    }
    //localStorage.clear();
    actualitza();
    return false;  
}
function edita(e){
    globalEditElement=$(e.target).parent().attr("id");;
    var nomTask = $(e.target).clone().children().remove().end().text();
    console.log(globalEditElement);
    $("input").val(nomTask);
    nomTask = $("input").val;
    $("#botoCanvia").click(canviaText);
}
function canviaText(e){
    var nomTask = $("input").val();
    for(var i=0;i<maxKey()+1;i++){
        if(i==globalEditElement){
            localStorage.setItem(i,nomTask);
        }
    }
    actualitza();
    document.location="#";
}
function actualitza(e){
    $("ul").children().remove();
    $("ul").listview("refresh");
    for(var i=0;i<maxKey()+1;i++){
        if(localStorage.getItem(i)){
            var element = $("<li id="+i+"><a href='#page1'>"+localStorage.getItem(i)+"<button>Elimina</button></li>");
            $("ul").append(element);
            $("button",element).click(elimina);
            $("a",element).click(edita);
            $("ul").listview("refresh");
        }
    }
    
}
function maxKey(){
    var valor = 0;
    for(var i=0;i<1000;i++){
        if(localStorage.getItem(i)){
            valor=i;
        }
    }
    return valor;
}
$('#Afegeix').click(afegeix);