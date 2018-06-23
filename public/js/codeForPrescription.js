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



