const http = require('http');




let myJobTitle = "4th Grade Math Teacher";

var uuid = "";
var skills = [];


let url = "http://api.dataatwork.org/v1/jobs";


var myObj = {};

http.get(url, (res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            //Interact with JSON here

            console.log(json.length);
            // console.log(json[0]);
            // myJsonString = json[0].title
            // myObj = json[0];
            let count = Object.keys(json).length;
            // console.log(count);
            var i;
            for (i = 0; i < count; i++) {
                if (myJobTitle == json[i].title) {

                    myObj = json[i];
                    break;
                }
            }
            // console.log(myObj);
            // console.log(myObj.uuid)
            uuid = myObj.uuid;
            // console.log(uuid)
            let skillsURL = 'http://api.dataatwork.org/v1/jobs/' + uuid + '/related_skills';


            http.get(skillsURL, (res) => {
                let skillsbody = "";

                res.on("data", (chunk) => {
                    skillsbody += chunk;
                });

                res.on("end", () => {
                    try {
                        //Response ends event
                        let skillsjson = JSON.parse(skillsbody);
                        // console.log(skillsjson);
                        let iHold = Object.keys(skillsjson.skills).length;
                        // console.log(iHold);
                        for (var j = 0; j < iHold; j++){
                            // console.log(skillsjson.skills[j].skill_name);
                            skills.push(skillsjson.skills[j]);

                        }
                        skills.sort(GetSortOrder("importance"));
                        http.createServer(function (req, res) {


                            for (var iHold = 0; iHold < skills.length; iHold++) {


                                res.write(skills[iHold].skill_name + '\t' + skills[iHold].importance + '\n');
                            }




                            return res.end();






                        }).listen(8080);

                        console.log("service running on 8080 port....");


                    } catch (error) {
                        console.error(error.message);
                    };
                });

            }).on("error", (error) => {
                console.error(error.message);
            });


        } catch (error) {
            console.error(error.message);
        };
    });



}).on("error", (error) => {
    console.error(error.message);
});


function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return 1;
        } else if (a[prop] > b[prop]) {
            return -1;
        }
        return 0;
    }
}
