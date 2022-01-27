
const api_url =
	"https://sheet.best/api/sheets/054e5651-32e6-46ed-9b9d-5142374b475d";


async function getapi(url) {
	

	const response = await fetch(url);
	

	var data = await response.json();
	console.log(data);

	if (response) {
		hideloader();
	}
	show(data);
}

getapi(api_url);


function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Mail</th>
		<th>Timestamp</th>
		<th>Attendance</th>
		</tr>`;
	

	for (let r of data) {
		tab += `<tr>
	<td>${r.Name} </td>
	<td>${r.Mail}</td>
	<td>${r.Timestamp}</td>
	<td>${r.Attendance}</td>		
</tr>`;
	}
	
	document.getElementById("employees").innerHTML = tab;
}
