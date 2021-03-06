

module.exports = getData = (period,data) => {
    let registers = [];

    //If period is empty/not sent
    if(period == ""){
        period = data[0].day;

        for(let i = 1; i < data.length; i++){
            if(data[i].day < period)
                period = data[i].day;
        }
    }

    //Get registers from one date
    registers = data.filter((elem,i,data) => {
        return data[i].day == period;
    });

    //Sort elements by hour
    function sortRegisters(a,b){
        if (a.hour < b.hour)
            return -1;
        if (a.hour > b.hour)
            return 1;
        return 0;
    }

    //Sort registers from one day by hour
    registers.sort(sortRegisters);

    //Get days in a zone
    function getDays(){
        let days = [];
        for(let i = 0; i < data.length; i++)
            days.push(data[i].day);
        days.sort();
        return Array.from(new Set(days));
    }

    //Get some values peak, totalPeople, values per hour, labels and average
      function getValues(){
        this.max = registers[0].macs.length;
        this.sum = 0;
        this.arrayLine = [];
        this.hours = [];
        this.avg = 0;

        for(let i = 0; i < registers.length; i++){
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
      function getCustomers(){
        this.customers = 0;
        this.visitors = 0;
        let customersArray = [];
        let visitorsArray = [];
        for(let i = 0;  i < registers.length; i++){
            for(let j = 0; j < registers[i].macs.length; j++){
                if(registers[i].macs[j].customer == true){
                    customersArray.push(registers[i].macs[j].mac);
                }else{
                    visitorsArray.push(registers[i].macs[j].mac);
                }
            }
        }

        let newArray = customersArray.filter(function (el, i, arr) {
	          return customersArray.indexOf(el) === i;
        });

        let visits = visitorsArray.filter(function (el, i, arr) {
	           return visitorsArray.indexOf(el) === i;
        });

        this.customers = newArray.length;
        this.visitors = visits.length;
        return this;
    }

    //Get data about main vendor, top5 vendors' quantities, and vendorsLabels
      function getVendors(){
        this.arrayPie = [];
        this.arrayPieLabels = [];
        this.vendors = [];
        let vendors = [];
        let aux = [];

        for(let i = 0; i < registers.length; i++){
            for(let j = 0; j < registers[i].macs.length; j++){
                aux.push(registers[i].macs[j]);
            }
        }

        //filter elements by attr 'mac'
        let unique = aux.filter((elem, index, self) => self.findIndex(
                (t) => {return (t.mac === elem.mac)}) === index)

        for(let j = 0; j < unique.length; j++){
            vendors.push(unique[j].vendor);
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

      function reduceTop5(numbers,labels,arraySort){
        let sum = 0;
        arraySort.sort((a,b) => {return b[1]-a[1]});
        for(let i = 0 ; i < arraySort.length; i++){
            if(i < 4){
                labels.push(arraySort[i][0]);
                numbers.push(arraySort[i][1]);
            }else{
                sum += arraySort[i][1];
            }
        }

        labels.push("Outros");
        numbers.push(sum);
    }

    let values = getValues();
    let people = getCustomers();
    let vendor = getVendors();
    let total = people.visitors + people.customers;

    return {
      zone: data[0].zone,
      days: getDays(),
      selectedDay: period,
      peak: values.max,
      totalPeople: total,
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
