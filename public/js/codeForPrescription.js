function extractInfoA(){
    $.getJSON({
        url: "/js/extractInfoPerscriptionsA.json",
        success: function(data) {
            console.log("is this on");
            var stringa="</br>";
            for (var i=0; i<data.length; i++){
                stringa += "Drug name: " +data[i].name+ ". Drug description: " +data[i].description+ ". Expires "+data[i].expiration_date+ ". Remaining Amount: " +data[i].amount+ "</br></br></br>";
            } 
            document.getElementById("typea").innerHTML = stringa;
        }
    });
}

function extractInfoB(){
    $.getJSON({
        url: "/js/extractInfoPerscriptionsB.json",
        success: function(data) {
            console.log("is this on");
            var stringb="</br>";
            for (var i=0; i<data.length; i++){
                stringb += "DANGEROUS TYPE-Drug name: " +data[i].name+ ". Drug description: " +data[i].description+ ". Expires "+data[i].expiration_date+ ". Remaining Amount: " +data[i].amount+"</br></br></br>";
            } 
            document.getElementById("typeb").innerHTML = stringb;
        }
    });
}

