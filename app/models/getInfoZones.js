
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

    //Sort registers by day
    registers.sort(sortRegisters);

    //Get labels to
    getLabelHours = () => {
        let labels = [];

        for(i = 0; i < data.length; i++){
            let temp = labels;
            let el = data[i].arrayLineLabels;
            labels = temp.concat(el);
        }
        labels.sort();

        return Array.from(new Set(labels));
    }

    console.log(getLabelHours());

    // return {
    //     zone: data[0].zone,
    //     arrayData: data, //all registers from zone
    //     labelHours: ,
    //     dataset:
    // }
}
