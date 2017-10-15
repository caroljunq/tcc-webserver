let selectZone = (sel) =>{
  let option = sel.options[sel.selectedIndex];
  let form = document.querySelector('.select-zones-comparing');
  form.action = '/comparing/'+ option.value;
  form.submit();
}

let drawLineChart = () =>{
  var data = [
    {
      label: 'My First dataset',
      strokeColor: '#F16220',
      pointColor: '#F16220',
      pointStrokeColor: '#fff',
      fill: false,
      data: [
        { x: '14:00', y: 65 },
        { x: '15:00', y: 59 },
        { x: '16:00', y: 69 },
        { x: '17:00', y: 0 },
        { x: '18:00', y: 0 },
        { x: '19:00', y: 81 },
        { x: '20:00', y: 56 }
      ]
    }
  ];
  // var data1 = [
  //   {
  //       data: [0,0,0,12,13,15,15],
  //       label: '24/10',
  //       borderColor: "#ef6262",
  //       fillColor: "#ef6262"
  //
  //   },
  //   {
  //       data: [10,10,1,12,13,15,15],
  //       label: '25/10',
  //       borderColor: "#3e95cd",
  //       fillColor: "#3e95cd"
  //   }
  // ];
  let data1= [{
            x: '14:00',
            y: 5
         }, {
            x: '16:00',
            y: 10
         }, {
            x: '17:00',
            y: 5
         }, {
            x: '18:00',
            y: 15
         }];
  let data2 = [{
            x: '14:00',
            y: 5
         }, {
            x: '16:00',
            y: 10
         }, {
            x: '17:00',
            y: 5
         }, {
            x: '18:00',
            y: 15
         }];
    // let data = [];
    // data.push(data1);

  new Chart(document.getElementById("area-chart"), {
    type: 'line',
    data: {
      labels: ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
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
