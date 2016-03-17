/*function createTable() {
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
    heading[0] = "OUHLHLHLe"
    heading[1] = "Group A"
    heading[2] = "Groub B"
    heading[3] = "Group C"
    heading[4] = "Total"

    var stock = new Array()
    stock[0] = new Array("Cars", "100.625", "85.50", "85.81", "987")
    stock[1] = new Array("Veggies", "88.625", "85.50", "85.81", "988")
    stock[2] = new Array("HOLA", "88.625", "85.50", "85.81", "989")
    stock[3] = new Array("Numbers", "88.625", "85.50", "85.81", "990")
    stock[4] = new Array("Requests", "88.625", "85.50", "85.81", "991")

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
}*/
