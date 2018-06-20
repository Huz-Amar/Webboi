function extractInfo(){
    $.getJSON({
        url: "/js/extractInfoInventory.json",
        success: function(data) {
            console.log("is this on");
            var stringa="</br>";
            var stringb="</br>";
            var stringc="</br>";
            for (var i=0; i<data.length; i++){
                stringa += data[i].name + "</br></br></br>";
            } 
            document.getElementById("typea").innerHTML = stringa;
        }
    });
}