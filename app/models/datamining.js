

module.exports = getData = (period,data) => {
    let registers = [];

    //If period is empty/not sent
    if(period == ""){
        for(i = 1; i < data.length; i++)
            if(data[i-1].day < data[i].day)
                period = data[i-1].day;
    }
    //Get registers from one date
    registers = data.filter((elem,i,data) => {
        return data[i].day == period;
    });

    //Sort elements by hour
    sortRegisters = (a,b) => {
        if (a.hour < b.hour)
            return -1;
        if (a.hour > b.hour)
            return 1;
        return 0;
    }

    //Sort elements generic
    sortElements = (a,b) => {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }

    //Sort registers from one day by hour
    registers.sort(sortRegisters);

    //Get days in a zone
    getDays = () =>{
        let array = [];
        for(i = 0; i < data.length; i++)
            array.push(data[i].day);
        array.sort(sortElements);

        return Array.from(new Set(array));
    }

    //Get some values peak, totalPeople, values per hour, labels and average
    getValues = () =>{
        this.max = registers[0].macs.length;
        this.sum = 0;
        this.arrayLine = [];
        this.hours = [];
        this.avg = 0;

        for(i = 0; i < registers.length; i++){
            let el = registers[i].macs.length;
            this.sum += el;
            if(el > this.max)
                this.max = el;
            this.arrayLine.push(el);
            this.hours.push(registers[i].hour);
        }

        this.avg =  (this.sum/registers.length).toFixed(2);
        return this;
    };

    //Get quantity of customers and visitors
    getCustomers = () =>{
        this.customers = 0;
        this.visitors = 0;
        for(i = 0;  i < registers.length; i++){
            for(j = 0; j < registers[i].macs.length; j++){
                if(registers[i].macs[j].customer == true)
                    this.customers++;
                else {
                    this.visitors++;
                }
            }
        }
        return this;
    }

    let values = getValues();
    let people = getCustomers();

    return {
      zone: data[0].zone,
      days: getDays(),
      peak: values.max,
      totalPeople: values.sum,
      dayAverage: values.avg,
      arrayLine: values.arrayLine,
      arrayLineLabels: values.hours,
      visitors: people.visitors,
      customers: people.customers
  //   vendor: 'Empty',
  //   arrayPie: []
  }
}
