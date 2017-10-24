
// //Get Random Color rgba
// function randomRgba(){
//     let o = Math.round, r = Math.random, s = 255;
//     return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '.8' + ')';
// }

// function checkElement(el,arr){
//     for(let i = 0; i < arr.length; i++){
//         if(el == arr[i])
//             return true;
//     }
//     return false;
// }

// function checkLabels(arrLabels,arrValues){
//     let el = [];
//     let array = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'];    
    
//     let el  = y.filter( function( el ) {
//         return x.indexOf( el ) < 0;
//       });

// }

//Sort elements by day
function sortRegisters(a,b){
    if (a.selectedDay < b.selectedDay)
        return -1;
    if (a.selectedDay > b.selectedDay)
        return 1;
    return 0;
}

module.exports = getInfo = (data) => {
    let registers = [];
    registers = data;

    //Sort registers by day
    registers.sort(sortRegisters);

    // //Get Random Color hexadecimal
    //  getRandomColor = () => {
    //     var letters = '0123456789ABCDEF'.split('');
    //     var color = '#';
    //     for (var i = 0; i < 6; i++ ) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    //
    // let getCoordinates = () => {
    //   let maoe = 'teste';
    //   console.log('stuff')
    //     for(let i = 0; i < 3; i++){
    //       let k = checkLabels()
    //       console.log(k + ' ' + i);
    //     }
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
    // getCoordinates();

    // return {
    //     zone: data[0].zone,
    //     arrayData: data
    // }

    let x = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'];
    let y = registers[0].arrayLineLabels;

    let myArray = x.filter( function( el ) {
      return y.indexOf( el ) < 0;
    });

    console.log(myArray);
}
