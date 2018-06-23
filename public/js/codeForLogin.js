var employee_name, employee_username, employee_password, employee_id, employee_access_level;

function getName(){
    console.log(employee_name);
    return employee_name;
}

function getUserName(){
    return employee_username;
}

function getPassword(){
    return employee_password;
}

function getAccessLevel(){
    return employee_access_level;
}

function getEmployeeID(){
    return employee_id;
}

function loginCheck(){
    $.getJSON({
        url: "/js/extractLoginInfo.json",
        success: function(data) {
            var a = document.getElementById('username').value;
            var b = document.getElementById('password').value;
            for (var i=0; i<data.length; i++){
                if (data[i].user==a && data[i].password==b){
                    redirectPage(JSON.stringify(data[i].name), JSON.stringify(data[i].employee_id), JSON.stringify(data[i].user), JSON.stringify(data[i].password), JSON.stringify(data[i].access_level));
                    return;
                }
            }
            alert("Username or password not recognized");
        }
    });
}

function redirectPage(NAME, ID, USERNAME, PASSWORD, ACCESSLEVEL){
    employee_name=NAME;
    employee_id=ID;
    employee_username=USERNAME;
    employee_password=PASSWORD;
    employee_access_level=ACCESSLEVEL;
    window.location = "http://localhost:3000/";
}

