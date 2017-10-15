let selectZone = (sel) =>{
  let option = sel.options[sel.selectedIndex];
  let form = document.querySelector('.select-zones-comparing');
  form.action = '/comparing/'+ option.value;
  form.submit();
}

function drawLineChart(labels,data){
  var data1 = [
    {
        data: [0,0,0,12,13,15,15],
        label: '24/10',
        borderColor: "#ef6262",
        fillColor: "#ef6262"

    },
    {
        data: [10,10,1,12,13,15,15],
        label: '25/10',
        borderColor: "#3e95cd",
        fillColor: "#3e95cd"
    }
  ];
  new Chart(document.getElementById("area-chart"), {
    type: 'line',
    data: {
      labels: ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
      datasets: data1
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
