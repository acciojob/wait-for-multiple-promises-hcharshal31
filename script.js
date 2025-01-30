//your JS code here. If required.
let table = document.querySelector(".table tbody");
let defaultRow = document.createElement("tr");
defaultRow.setAtribute("id", "loading");
defaultRow.innerHTML = "<td colspan=2>Loading...</td>";

if(table){
	table.appendChild(defaultRow);
}

function createPromises(index){
	let time = Math.random() * 2 + 1;
	return new Promise((resolve) => {
		setTimeout(()=>{
			resolve({name: `Promise ${index}`, time: time.toFixed(3)})
		}, time *1000);
	})
}

let startTime = performance.now();
let promises = [createPromises(1), createPromises(2), createPromises(3)];
Promise.all(promises).then((results)=>{
	let endTime = performance.now();
	let totalTime = ((endTime - startTime)/1000).toFixed(3);
	table.innerHTML = "";
	results.forEach((result)=>{
		let row = document.createElement("tr");
		row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
		table.appendChild(row);
	});
	
	let totalRow = document.createElement("tr");
	totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
	table.appendChild(totalRow);
})
