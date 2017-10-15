
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

    //Sort elements by x coordinate
    sortByX = (a,b) =>{
        if (a.x < b.x)
            return -1;
        if (a.x > b.x)
            return 1;
        return 0;
    }

    //Sort registers by day
    registers.sort(sortRegisters);

    // //Get labels to
    // getLabelHours = () => {
    //     let labels = [];
    //
    //     for(i = 0; i < registers.length; i++){
    //         let temp = labels;
    //         let el = registers[i].arrayLineLabels;
    //         labels = temp.concat(el);
    //     }
    //     labels.sort();
    //
    //     return Array.from(new Set(labels));
    // }

    // //Get Random Color hexadecimal
    //  getRandomColor = () => {
    //     var letters = '0123456789ABCDEF'.split('');
    //     var color = '#';
    //     for (var i = 0; i < 6; i++ ) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    //Get Random Color rgba
    randomRgba = () => {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '.8' + ')';
    }


    getCoordinates = () => {
        let objs = [];
        for(i = 0; i < registers.length; i++){
            let data = [];
            let color = randomRgba();
            let bkg = [];
            for(j = 0; j < registers[i].arrayLine.length; j++){
                let el = registers[i].arrayLineLabels[j];
                let obj = {x: el, y: registers[i].arrayLine[j]};
                bkg.push(color);
                data.push(obj);
            }
            let temp = {
              label: registers[i].selectedDay,
              data: data,
              backgroundColor: bkg
            };
            objs.push(temp);
        }
        return objs;
    }

    let coordinates = getCoordinates();

    return {
        zone: data[0].zone,
        arrayData: data, //all registers from zone
        dataset: coordinates
    }
}
