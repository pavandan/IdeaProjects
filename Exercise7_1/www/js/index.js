

document.addEventListener('deviceready', deviceReady, false);


function deviceReady() {

    var parentElement = document.getElementById("deviceready");
    var listeningElement = parentElement.querySelector(".listening");
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');


    receivedElement.innerHTML = "Cordova version " + device.cordova + "<br/>";

    receivedElement.innerHTML = "Cordova platform " + device.platform + "<br/>"
                                    +"Cordova uuid " + device.uuid + "<br/>";
}





