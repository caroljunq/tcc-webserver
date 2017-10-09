// var data = [
//       { y: '13:00', a: 50, b: 90},
//       { y: '14:00', a: 65,  b: 75},
//       { y: '15:00', a: 50,  b: 50},
//       { y: '16:00', a: 75,  b: 60},
//       { y: '17:00', a: 80,  b: 65},
//       { y: '18:00', a: 90,  b: 70},
//       { y: '19:00', a: 100, b: 75},
//       { y: '20:00', a: 115, b: 75}
//     ],
//     config = {
//       element: "area-chart",
//       data: data,
//       xkey: 'y',
//       ykeys: ['a', 'b'],
//       labels: ['24/10', '25/10'],
//       fillOpacity: 0.6,
//       hideHover: 'auto',
//       behaveLikeLine: true,
//       resize: true,
//       pointFillColors:['#ffffff'],
//       pointStrokeColors: ['black'],
//       lineColors:['#3980b5','#ef6262']
//   };
// Morris.Area(config);

new Chart(document.getElementById("area-chart"), {
  type: 'line',
  data: {
    labels: ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
    datasets: [
      {
        data: [12,13,15,15,16,6,20],
        label: '24/10',
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: [34,13,16,18,19,8,14],
        label: '25/10',
        borderColor: "#ef6262",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'People Traffic',
      fontSize: 18
    }
  }
}); 