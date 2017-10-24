function selectZone(sel){
  let option = sel.options[sel.selectedIndex];
  let form = document.querySelector('.select-zones-comparing');
  form.action = '/comparing/'+ option.value;
  form.submit();
}

let drawBarChart = (data2) =>{
  new Chart(document.getElementById("area-chart"), {
    type: 'bar',
    data: {
      labels: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'], 
      datasets: data2
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
