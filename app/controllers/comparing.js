let selectZone = (sel) =>{
  let option = sel.options[sel.selectedIndex];
  let form = document.querySelector('.select-zones-comparing');
  form.action = '/comparing/'+ option.value;
  form.submit();
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let drawLineChart = () =>{
  var data = [
    {
      label: 'teste1',
      backgroundColor: [
        "#2ecc71",
        "#2ecc71",
        "#2ecc71",
        "#2ecc71",

      ],

      data: [
        { x: '14:00', y: 65 },
        { x: '15:00', y: 59 },
        { x: '16:00', y: 69 },
        { x: '19:00', y: 81 },
      ]
    },
    {
      label: 'teste2',
      data: [
        { x: '14:00', y: 86 },
        { x: '15:00', y: 99 },
        { x: '16:00', y: 59 },
        { x: '17:00', y: 130 },
        { x: '18:00', y: 0 },
        { x: '19:00', y: 78 },
        { x: '20:00', y: 37 }
      ]
    },
  ];

  new Chart(document.getElementById("area-chart"), {
    type: 'bar',
    data: {
      labels: ['14:00','15:00','16:00','17:00','18:00','19:00','20:00','22:00','23:00','00:00'],
      datasets: data
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
