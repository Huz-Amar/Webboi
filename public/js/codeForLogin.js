function checkLogin(){
    $.getJSON({
        url: "/js/extractLoginInfo.json",
        success: function(data) {
            var string="";
            for (var i=0; i<data.length; i++){
                console.log(username);
            } 
        }
    });
}