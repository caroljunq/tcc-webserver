let selectedDay = (sel,zone) =>{
  let option = sel.options[sel.selectedIndex];
  let form = document.querySelector('.day-selection');
  let date = option.value.split('-');
  form.action = '/statistics/'+ zone +"/"+ date[0]+"/"+date[1]+"/"+date[2];
  form.submit();
}

function drawLineChart(array,label,daySelected){
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: label,
      datasets: [{
          data: array,
          label: daySelected,
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
function drawPieChart(array,label){
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: label,
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
