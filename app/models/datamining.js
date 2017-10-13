

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

    //Sort registers from one day by hour
    registers.sort(sortRegisters);

    //Get days in a zone
    getDays = () =>{
        let days = [];
        for(i = 0; i < data.length; i++)
            days.push(data[i].day);
        days.sort();
        return Array.from(new Set(days));
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

    //Get data about main vendor, top5 vendors' quantities, and vendorsLabels
    getVendors = () =>{
        this.arrayPie = [];
        this.arrayPieLabels = [];
        this.vendors = [];
        let vendors = [];
        let prev;
        for(i = 0; i < registers.length; i++){
            for(j = 0; j < registers[i].macs.length; j++){
                vendors.push(registers[i].macs[j].vendor);
            }
        }

        vendors.sort();
        for(i = 0; i < vendors.length; i++) {
            if ( vendors[i] !== prev ) {
                this.arrayPieLabels.push(vendors[i]);
                this.arrayPie.push(1);
            }else{
                this.arrayPie[this.arrayPie.length-1]++;
            }
            prev = vendors[i];
        }

        // reduceTop5(this.arrayPie,this.arrayPieLabels);

        return this;
    }

    let values = getValues();
    let people = getCustomers();
    let vendor = getVendors();

    return {
      zone: data[0].zone,
      days: getDays(),
      peak: values.max,
      totalPeople: values.sum,
      dayAverage: values.avg,
      arrayLine: values.arrayLine,
      arrayLineLabels: values.hours,
      visitors: people.visitors,
      customers: people.customers,
      arrayPie: vendor.arrayPie,
      arrayPieLabels: vendor.arrayPieLabels
      //   vendor: 'Empty',
  }
}
