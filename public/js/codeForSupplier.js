function extractInfoA(){
    $.getJSON({
        url: "/js/extractInfoSupplierA.json",
        success: function(data) {
            console.log("is this on");
            var stringa="</br>";
            for (var i=0; i<data.length; i++){
                stringa += "Name: " +data[i].supplies+ ". Provider: " +data[i].supplier_name+ ". Supplied from:  "+data[i].location+ ". Amount delivered: " +data[i].amount_delivered+ ". To contact: "+data[i].phone_number+"</br></br></br>";
            } 
            document.getElementById("typea").innerHTML = stringa;
        }
    });
}

function extractInfoB(){
    $.getJSON({
        url: "/js/extractInfoSupplierB.json",
        success: function(data) {
            console.log("is this on");
            var stringb="</br>";
            for (var i=0; i<data.length; i++){
                stringa += "Name: " +data[i].supplies+ ". Provider: " +data[i].supplier_name+ ". Supplied from:  "+data[i].location+ ". Amount delivered: " +data[i].amount_delivered+ ". To contact: "+data[i].phone_number+"</br></br></br>";
            } 
            document.getElementById("typeb").innerHTML = stringb;
        }
    });
}

function extractInfoC(){
    $.getJSON({
        url: "/js/extractInfoSupplierC.json",
        success: function(data) {
            console.log("is this on");
            var stringc="</br>";
            for (var i=0; i<data.length; i++){
                stringc += data[i].name + "</br></br></br>";
            } 
            document.getElementById("typec").innerHTML = stringc;
        }
    });
}