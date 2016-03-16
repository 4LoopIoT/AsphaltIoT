function createTable() {
    var myTableDiv = document.getElementById("stats_table")
    var table = document.createElement('TABLE')
    table.setAttribute("class", "table table-striped stats_table")
    var tableHead = document.createElement('THEAD')
    tableHead.setAttribute("class", "stats_table_thead")
    var tableBody = document.createElement('TBODY')

    table.border = '0'
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    var heading = new Array();
    heading[0] = "Zone"
    heading[1] = "Available Spaces"

    var stock = new Array()
		for(i = 0; i < GET_ROW_SIZE_FIREBASE; i++){
    	stock[i] = new Array(GET_ZONE, GET_AVAILABLE);
    }

    //TABLE COLUMNS
    var tr = document.createElement('TR');
    tableHead.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    //TABLE ROWS
    for (i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < stock[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(stock[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}
