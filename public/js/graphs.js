
fetch(
    new Request(
        '../json/output.txt',
        {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        }
    )
)
.then(res => res.text())
.then(fileText =>
    fileText
        .split(/\n/)
        .filter(v => v.length > 0 )
        .map(line => line.split('-'))
        .map(register => ({
                mac: register[0],
                timestamp: new Date(register[1])

        }))
).then((array) => { mydata = array});

const mydata1 = [
    ["Apple",220],
    ["Motorola",150],
    ["Lenovo",40],
    ["Redmi",80],
    ["Outros",100],
    ["Samsung",190]
];

const mydata2 = [
    ["14:00",25],
    ["15:00",3],
    ["16:00",15],
    ["17:00",17],
    ["18:00",26],
    ["19:00",53],
    ["20:00",34],
    ["21:00",36],
    ["22:00",17],
]

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

        let data = new google.visualization.DataTable();
        let data1 = new google.visualization.DataTable();
        data.addColumn('string', 'Vendors');
        data.addColumn('number', 'Smartphones');

        data1.addColumn('string', 'Hour');
        data1.addColumn('number', 'People');

        let f,n;
  	    for(let i = 0 ; i < mydata1.length; i++){
  	        f = mydata1[i][0]
  	        n = mydata1[i][1];
  	        data.addRows([[f,n]]);
  	     }

         for(let i = 0 ; i < mydata2.length; i++){
   	        f = mydata2[i][0]
   	        n = mydata2[i][1];
   	        data1.addRows([[f,n]]);
   	     }

        const options = {
            title: 'Vendors',
            width: 800,
            height: 600,
            backgroundColor: '#E4E4E4'
        };

        const options2 = {
            title: 'People Traffic',
            width: 800,
            height: 600,
            backgroundColor: '#E4E4E4'
        };
        let chart1 = new google.visualization.PieChart(document.getElementById('pie_graph'));
        let chart2 = new google.visualization.LineChart(document.getElementById('traffic_graph'));
        chart1.draw(data, options);
        chart2.draw(data1, options2);
}
