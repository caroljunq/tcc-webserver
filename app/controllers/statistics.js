new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
    datasets: [{
        data: [45,56,14,23,32,42,20],
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

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Apple", "Samsung", "Lenovo", "Asus", "Outros"],
      datasets: [{
        backgroundColor: ["#f3a935", "#c73558","#6ebe9f","#2586a4","#55596a"],
        data: [45,56,85,77,10]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Vendors',
        fontSize: 18
      }
    }
});
