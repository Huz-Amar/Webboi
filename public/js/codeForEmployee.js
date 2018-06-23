//DEAD CODE DOESN'T WORK OUTDATE AND VERY BIG SAD

function fillTable(){
	$.getJSON({
		url: "/js/listOfEmployees.json",
		success: function(data) {
			var tableCode = "", j = -1;

			for (var i=0; i<data.length; i++){

				tableCode	+=    '<th scope="row>' + i + '</th>' +
								  '<tr><td>'  + data[i].employeeID +
								  '</td><td>' + data[i].name +
								  '</td><td>' + data[i].access_level +
								  '</td><td>' + data[i].superID +
								  '</td></tr>';

				/*r[++j] = '<tr><td>';
				r[++j] = data[i][0];
				// [i][0] is Employee ID
				r[++j] = '</td><td>';
				r[++j] = data[i][1];
				// [i][1] is Name
				r[++j] = '</td><td>';
				r[++j] = data[i][2];
				// [i][2] is Access level
				r[++j] = '</td><td>';
				r[++j] = data[i][3];
				// [i][3] is Super_ID
				r[++j] = '</td></tr>';*/
			} 
			document.getElementById("theTableCode").innerHTML = tableCode;
			
		}
	});
}