function sleep(milliseconds) {
    var start = new Date().getTime();
    do{} while((new Date.getTime()-start)<milliseconds);
    document.getElementById("myID").textContent("Sleep for :"+milliseconds);


}
sleep(7000);