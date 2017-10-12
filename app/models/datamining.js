

module.exports = getData = (period,data) => {
    let registers = [];

    if(period == ""){
      for(i = 1; i < data.length; i++)
        if(data[i-1].day < data[i].day)
          period = date[i-1].day;
    }

    registers = data.filter((elem,i,data) => {
      return data[i].day == period;
    });

    return registers;

  // return {
  //   zone: data[0].zone,
  //   peak: getPeak(),
  //   visitors: 0,
  //   customers: 0,
  //   totalPeople: 0,
  //   vendor: 'Empty',
  //   dayAverage: 0,
  //   days: [],
  //   arrayLine: [],
  //   arrayPie: []
  // }

}
