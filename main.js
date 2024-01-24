const tdValue = 10;
const trValue = 10;

function createdTable(trValue, tdValue) {
    const customTable = document.querySelector('.table_custom');
    let valueTable = document.createElement("table");
    let tbody = document.createElement("tbody");
    for (let i = 1; i <= trValue; i++) {
        let row = document.createElement('tr');
            for (let j = 1; j <= tdValue; j++){
                 row.innerHTML += `<td>${i*j}</td>`;
            }
        tbody.append(row);
    }
    valueTable.append(tbody);
    customTable.append(valueTable);
}

createdTable(tdValue, trValue);


