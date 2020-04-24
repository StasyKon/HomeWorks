function generateList(array) {
    let ul = document.createElement('ul');
    array.forEach(function(elem) {
        let li = document.createElement('li');
        let item;
        if (Array.isArray(elem)) {
            item = generateList(elem);
        } else {
            item = document.createTextNode(elem)
        }
        li.append(item);
        ul.append(li);
        document.body.append(ul);
    })
    return ul;
}

let counter = 1;

function getTable(tableClass) {
    let table = document.createElement('table');
    table.classList.add(tableClass);
    for (let i = 0; i < 10; i++) {
        let newRow = document.createElement('TR');
        newRow.classList.add('row');
        for (let j = 0; j < 10; j++) {
            let newCell = document.createElement('TD');
            newCell.classList.add('cell');
            let text = document.createTextNode(counter++);
            newCell.append(text);
            newRow.append(newCell);
        }
        table.append(newRow);
    }
    document.body.append(table);
}

generateList([1, 2, [1.1, 1.2, 1.3], 3]);
getTable("myTable");