function drawLineChart(array){
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
      datasets: [{
          data: array,
          label: '24/10',
          borderColor: "#3e95cd",
          fill: false
        }]
    },
    options: {
      title: {
        display: true,
        text: 'People Traffic',
        fontSize: 18
      }
    }
  }); 
}
// https://emn178.github.io/Chart.PieceLabel.js/samples/demo/ --> tipos de labeçs
function drawPieChart(array){
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Apple", "Samsung", "Lenovo", "Asus", "Outros"],
      datasets: [{
        backgroundColor: ["#f3a935", "#c73558","#6ebe9f","#2586a4","#55596a"],
        data: array
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Vendors',
        fontSize: 18
      },
      pieceLabel: {
        render: 'percentage',
        fontColor: ['green', 'white', 'red'],
        precision: 2,
        fontColor: '#FFFFFF',
        fontSize: 14
      },
      legend: {
        labels: {
            // This more specific font property overrides the global property
            fontSize: 14
        } 
      }
    }
  });
}
