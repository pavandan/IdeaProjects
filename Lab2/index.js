

//introduce promises
//use jquery mobile special pagecreate event
//deviceready
//use promise for page create
//as 6_2
/*window.addEventListener("load",function load(event) {
    window.removeEventListener("load", load,false);

    document.addEventListener("deviceready",initApp,false);

    console.log("[Notice] Device is now ready. Now registering app events ...");

}, false);*/
$(document).on("deviceready",initApp());
function initApp() {
    //console.log(navigator.notification);


    // navigator.notification.prompt("Hello",null,"Title",['Ok'],"vandan");
    console.log("page created");

    var $name=$("#name");
    var $email=$("#email");
    var $age=$("#age");

    var $deletePhoto = $("#deletePhoto");

    var $pop=$("#pop");

    var $uploaded = $("#uploaded");
    var $photo = $("#photo");
    var emptyImage = $photo.attr("src");

    var $myForm = $("#myForm");
    var db=null;
    $(document).on("deviceready",function () {
        db= window.openDatabase("registration","1","Registration",10*1024*1024);
        db.transaction(function (tx) {
            tx.executeSql("create table if not exists "+"registration(name string, email string primary key ,age string, image string)",[],
                function () {
                    console.log("registration");
                });
        })


    });


    $("#saveInfo").click(function(event){
        event.preventDefault();
        var name=$name.val().trim();
        var email=$email.val().trim().toLowerCase();
        var age=parseInt($age.val());

        console.log(age);

        /// Should be More error checks!
        // check for name and age
        var errMsg='';
        if (name.length<1) {errMsg +=' Name cannot be empty<br/>';}
        if (email.length<1) {errMsg +='Email cannot be empty<br/>';}
        if ( errMsg.length>1 ) {
            showPopup(errMsg);
            return true;
        }


        var myImage= $photo.attr("src");
        db.transaction(function (tx) {
            tx.executeSql("insert into registration "+"( name, email, age, image) values(?,?,?,?);",
                [name,email,age,myImage],null,function () {
                    alert("error in database");
                });
            console.log("sql");

        });

        // Note: the code below saves myImage in the database.
        // Moreove, it even saves "empty" image! This is WRONG.
        // In hybrid application you Camera plugin saves file locally.
        // Thus you only have to reference link to that file!
        // This code also saves "emtpy" image. Fix it!
        // var student={name:name, age:age, image:myImage};

        // localStorage.setItem(email, JSON.stringify(student));

        // Here "alert" is used. You'd need to use Cordova's dialogs!
        alert("Record successfully saved!");

        $myForm.trigger("reset");
        $deletePhoto.trigger("click");

    });

    $("#checkInfo").click(function(event){
        event.preventDefault();
        var email = $email.val();
        if (email.length<1) {
            showPopup("Email cannot be empty!");
            return true;
        }


        // Reset the form on any action
        $myForm.trigger("reset");
        $deletePhoto.trigger("click");

        // Leave only the input
        $email.val(email);


        // var student=localStorage.getItem(email);

        if (student) {
            // The code below is wrong! You need to check that student actually exists!
            student = JSON.parse( student );
            $name.val(student.name);
            // You need to take care of slider yourself!
            $age.val(student.age).slider("refresh");

            displayImage(student.image);

            // Here "alert" is used. You'd need to use Cordova's dialogs!
            alert("Found a record with email '" + email + "'.");
        }
        else {
            // Here "alert" is used. You'd need to use Cordova's dialogs!
            alert("Record with e-mail '" + email + "' not found in the database!");
        }



    });

    $("#uploadPhoto").click(function(event){

        // We pass "fake" data here
        var options={
            destinationType:Camera.DestinationType.FILE_URI,
            cameraDirection:Camera.Direction.FRONT,
            allowEdit:true,
            correctOrientation:true
        };
        console.log("Camera is now ready");

        navigator.camera.getPicture(cameraSuccess,cameraError,options);
        displayImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACgCAMAAAB+IdObAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUM4MEUxMTk1Mzk2MTFFOUJBM0NGRTc2MUUyNzIwNUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUM4MEUxMUE1Mzk2MTFFOUJBM0NGRTc2MUUyNzIwNUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QzgwRTExNzUzOTYxMUU5QkEzQ0ZFNzYxRTI3MjA1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QzgwRTExODUzOTYxMUU5QkEzQ0ZFNzYxRTI3MjA1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtWKICMAAAAGUExURWBgYPj4+NtTBSgAAAS9SURBVHja3J2LUsJADEVP/v+nnVGhLYXdPPdB1VGrlN6e5G42sIBUbgi/29+34ruqPPjl7GuVVAtp/LqNkMd584wrCu+O0vw4dPz+XImEaiCchMjGQjhtpUyok3EF8kyT3YjcgdQioRQINyGyX2jddZQioTCu7kKoc64ZQthGyEcdhUgY5VjVTBjlWNXORZVjfRJShYTBQMrKYEYDqULCQMcqda5JQvKVkJ8gtGUUIWFwgpyQsLCQnmMVDiZMAFKChBlAKtKEwY5V5lxkHkqvIx8J6UBQC0mtVMhOEK2QbCSMACIDnIsRjtXYvWRoNaa3Ul4GM8B5mwIXI4J8TpBTOfk231lKSPu6N1iBrCeEhpBq5yLRsVpAypFQDOQ266pyLgY4Vje4Ms4iKbREAURKeyqkZUhXRyvfVxGiCaxiJQxxrAHOxUgglYMJQ3UU1lxEb24IrFLnIoOHXkddvodDM0NIBhIyLMugo8y5GJnplcFFDQ96t0uvuRgOpAgJ44HU1POMdKxK52KoYxU6F8EEyRUSUMIMIFLwPBXyEyQixJ8mjHasqjLYrT8UWAVImAQkPUvIzhCJCAk4FxMcq2Qw8QqJBlZ68YhbRxRIMhJmOFaFc+FNkAwhmc5FZoZIhhBnGUyiY/kuStL47rmKeToS51hMcqxucFnPjDTHCpSfGUiYCyRvMGGaYyU7Fw7HyhWS5FzMBpKFBDuQZB1JxaMxtKRCSIpzMdOxMnuoZCRIyiOqQSUsACSlDGauY+U5F5MdK20wYbZjZSFhDSDxfEf5X8VA4oMJ8x0rx7nWF6JUgj5DqNURfEYtayRIHAnqwCrXEVPCIgkS7jyiTJAROkKLGlREZJSQQHCxiGOFBxOWyfRgmrCI9YaRsIpjRZGwjGP1u8FxIkOFOMtgVgPinSzSz3QGC/GlCUtlesC5WCxB3EjoJcgqQnpIWBCIy7lwJMg8IeILLZkGxIEEj2M11qgbllQ2X5bH/JgJ5gRpCmlEova/O1cEk5D+4m2zENMFwe5cOBwLhxCsQqzdYOyB5SJiF2J0Ljy1ye8Zy+m0hf/C7HXP7fLePFHeH8iMhEiN9WZvZ01ox2wDnQgi09v7XkJCIoMJkaLXTgQsSixIMGd6iMgHKZYlsR/KYAyzQkRPpD0cijby9M6FocZS3L96XNcRMSAhAMRCRFRr9gOTRSJFr4FIW0k3e/rORaRvYiHytvxVuLO25iLSb9AQaZyVhoh6UQORRpZ+HOkZsXXluEKIOFbZW4S8HRxxCHlJE7yOZRsQO7dTDfttJESm6XOFXJEQAGIJLQJCVEiI9E1U48hlCiXvD5vwqgREWu92IfZxRMvk9a1n2ErIqTtE5MFCtZDe5XEJuSIh0umNCLFMIDXOhdexjgvBuz3nT83USjyL+c9IGNt6r1vUQBfIo0fz6aP96/+uR8/nrwGkPdblT53JIj3HWns7Fey9x0J2UPIQwrZATs7F3kAOJIjxlZNXVYLlpcUXDi5hdyDHM2p313EUj7sLeaT59joeS3u/QwhfkCMHke9J9u+w370rlNOAyPntVrf7ek5CkNf38d1u41n9SsGcdrCMS/Nh32w/nt/M3qZ16/1u+PHafNh/+xFgAOg/Uvn+8e0zAAAAAElFTkSuQmCC");
    });
    function cameraSuccess(imageData){
        var image=$("#photo");
        image.src=imageData;
    }
    function cameraError(errorData){
        navigator.notification.alert("Error"+JSON.stringify(errorData),null,"Error","OK");
    }
    $deletePhoto.click(function(event){

        event.preventDefault();

        // Reset the photo to default "empty" image.
        $photo.attr("src", emptyImage);
        $uploaded.hide();
        $(this).hide();
    });

    // Function below is correct. Nothing to fix here!
    function showPopup(message) {
        $pop.html('<p>'+message+'</p>').popup("open");
        setTimeout(function(){  $pop.popup("close"); }, 1000);
    }

    // Function below is correct. Nothing to fix here!
    function displayImage(imageData) {
        $photo.attr("src", imageData);
        $uploaded.show();
        $deletePhoto.show();
    }

}

