
//Get Random Color rgba
function randomRgba(){
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '.8' + ')';
}


//Sort elements by day
function sortRegisters(a,b){
    if (a.selectedDay < b.selectedDay)
        return -1;
    if (a.selectedDay > b.selectedDay)
        return 1;
    return 0;
}

//Sort elements by x field
function sortRegistersByX(a,b){
    if (a.x< b.x)
        return -1;
    if (a.x > b.x)
        return 1;
    return 0;
}

function getHoursValue(arrLabels,arrValues){
    let hours = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'];
    let arr = hours.filter( function( el ) {
        return arrLabels.indexOf( el ) < 0;
    });

    for(let i = 0; i < arr.length; i++){
        arrLabels.push(arr[i]);
        arrValues.push(0);
    }
}

function getCoordinates(registers){
    let objs = [];
    for(let i = 0; i < registers.length; i++){
        let data = [];
        let color = randomRgba();
        let bkg = [];
        let labels = registers[i].arrayLineLabels;
        let numbers = registers[i].arrayLine;
        getHoursValue(labels,numbers);

        for(let j = 0; j < numbers.length; j++){
            let obj = {x: labels[j], y: numbers[j]};
            bkg.push(color);
            data.push(obj);
        }
        data.sort(sortRegistersByX);
        let temp = {
          label: registers[i].selectedDay,
          data: data,
          backgroundColor: bkg
        };
        objs.push(temp);
    }
    return objs;
}

module.exports = getInfo = (data) => {
    let registers = [];
    registers = data;

    //Sort registers by day
    registers.sort(sortRegisters);

    let valuesSet = getCoordinates();

    return {
        zone: data[0].zone,
        arrayData: data,
        dataset: valuesSet
    }
}
