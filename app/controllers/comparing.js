
new Chart(document.getElementById("area-chart"), {
  type: 'line',
  data: {
    labels: ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
    datasets: [
      {
        data: [0,0,0,12,13,15,15],
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
