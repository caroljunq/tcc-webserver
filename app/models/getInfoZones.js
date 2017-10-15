
module.exports = getInfo = (data) => {
    let registers = [];
    registers = data

   //Sort elements by day
    sortRegisters = (a,b) => {
        if (a.selectedDay < b.selectedDay)
            return -1;
        if (a.selectedDay > b.selectedDay)
            return 1;
        return 0;
    }

    //Sort registers from one day by hour
    registers.sort(sortRegisters);

    getLabels

  return {
      zone: data[0].zone,
      arrayData: data, //all registers from zone
      labelHours: ,
      dataset
  }
}
