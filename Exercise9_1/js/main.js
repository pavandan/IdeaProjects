var input = document.getElementById("limit");
var button = document.getElementById("button");
var result= document.getElementById("result");

var result_default_text=result.textContent;

 if(!!window.Worker){
     var myWorker = null;


     function startWorker() {
         if(!myWorker){
             myWorker = new Worker("js/worker.js");

             myWorker.onmessage=function (e) {
                 if(e.data.error){
                     result.textContent= e.data.error;
                 }else if(e.data.working){
                     result.textContent="Still working, found: "+e.data.found+" prime numbers";
                 }else if(e.data.done){
                     result.textContent="Done! Found: "+e.data.found+" prime numbers";
                 }
             }

         }
     }
     function stopWorker() {
         if(myWorker){
             myWorker.terminate();
             myWorker=null;
         }
     }

     button.onclick=function () {
         startWorker();
         myWorker.postMessage([input.value.trim()]);
     };
 }else {
     input.readOnly=true;
     result.textContent="Your browser does not support web workers";
 }