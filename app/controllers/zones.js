let selectedZone = (sel) =>{
  let option = sel.options[sel.selectedIndex];
  let form = document.querySelector('.zones-selection');
  form.action = '/statistics/'+ option.value;
}