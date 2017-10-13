

module.exports = getData = (period,data) => {
    let registers = [];

    //If period is empty/not sent
    if(period == ""){
        period = data[0].day;

        for(i = 1; i < data.length; i++){
            if(data[i].day < period)
                period = data[i].day;
        }
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

        for(i = 0; i < registers.length; i++){
            for(j = 0; j < registers[i].macs.length; j++){
                vendors.push(registers[i].macs[j].vendor);
            }
        }

        let map = vendors.reduce((prev, cur) => {
            prev[cur] = (prev[cur] || 0) + 1;
            return prev;
        }, {});



        let sortable = [];
        for(let vendor in map) {
            sortable.push([vendor, map[vendor]]);
        }

        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });

        reduceTop5(this.arrayPie,this.arrayPieLabels,sortable);

        return this;
    }

    reduceTop5 = (numbers,labels,arraySort) =>{
        let sum = 0;
        arraySort.sort((a,b) => {return b[1]-a[1]});
        for(i = 0 ; i < arraySort.length; i++){
            if(i < 5){
                labels.push(arraySort[i][0]);
                numbers.push(arraySort[i][1]);
            }else{
                sum += arraySort[i][1];
            }
        }

        labels.push("outros");
        numbers.push(sum);
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
      arrayPieLabels: vendor.arrayPieLabels,
      vendor: vendor.arrayPieLabels[0]
  }
}
