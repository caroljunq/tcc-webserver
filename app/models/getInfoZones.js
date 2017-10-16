
module.exports = getInfo = (data) => {
    let registers = [];
    registers = data

   //Sort elements by day
      function sortRegisters(a,b){
        if (a.selectedDay < b.selectedDay)
            return -1;
        if (a.selectedDay > b.selectedDay)
            return 1;
        return 0;
    }

    //Sort elements by x coordinate
      function sortByX(a,b){
        if (a.x < b.x)
            return -1;
        if (a.x > b.x)
            return 1;
        return 0;
    }

    //Sort registers by day
    registers.sort(sortRegisters);

    // // //Get labels to
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
      function randomRgba(){
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '.8' + ')';
    }

    // let checkLabels = () =>{
    //     for(let i = 0; i < 24; i++){
    //         console.log(i)
    //     }
    //     return 'maoee';
    // }
    //
    //
    // let getCoordinates = () => {
    //   let maoe = 'teste';
    //   console.log('stuff')
    //     for(let i = 0; i < 3; i++){
    //       let k = checkLabels()
    //       console.log(k + ' ' + i);
    //     }
    // }

    // //Check if an element is in array
    // checkElement = (el, array) => {
    //     for(let i = 0; i < array.length; i++)
    //         if(el == array[i])
    //             return true;
    //     return false;
    // }
    //
    // checkLabels = (arrayLabels,numbers) =>{
    //     let labels = ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00",
    //     "23:00"];
    //     for(let i = 0; i < 24; i++){
    //         if(!checkElement(labels[i],arrayLabels)){
    //             arrayLabels.push(labels[i]);
    //             numbers.push(0);
    //         }
    //     }
    //     console.log('maoe')
    // }
    //
    //
    // getCoordinates = () => {
    //     let objs = [];
    //     for(let i = 0; i < registers.length; i++){
    //         let data = [];
    //         let color = randomRgba();
    //         let bkg = [];
    //         let labels = registers[i].arrayLineLabels;
    //         let numbers = registers[i].arrayLine;
    //         checkLabels(labels,numbers);
    //
    //         // for(let j = 0; j < numbers.length; j++){
    //         // //     let obj = {x: labels[j], y: number[j]};
    //         // //     bkg.push(color);
    //         // //     data.push(obj);
    //         // // }
    //         // // let temp = {
    //         // //   label: registers[i].selectedDay,
    //         // //   data: data,
    //         // //   backgroundColor: bkg
    //         // // };
    //         // // objs.push(temp);
    //         // }
    //     }
    //     // return objs;
    //     // console.log(objs)
    // }
    getCoordinates();

    return {
        zone: data[0].zone,
        arrayData: data
    }
}
