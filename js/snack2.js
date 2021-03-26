//SANCK 1

// function per() {
//     var numbers = [];

//     var sum = 0;

//     var nTimes = 5;

//     for (var i = 0; i < nTimes; i++) {
//         numbers.push( parseInt( prompt("Insert number") ) );
//     }

//     console.log(numbers);

//     for ( var j = 0; j < numbers.length; j++) {
//         sum += numbers[j]; 
//     }

//     console.log(sum);
// } 

// function fintanto() {
//     var numbers = [];

//     var sum = 0;

//     var nTimes = 5;

//     var counter = 0;

//     while (counter < nTimes) {
//         numbers.push( parseInt( prompt("Insert number") ) );
//         counter++;
//     }

//     counter = 0;

//     while (counter < numbers.length) {
//         sum += numbers[counter];
//         counter++;
//     }

//     console.log(sum);
// }


//SNACK 2

// var number = parseInt( prompt("Type here your number"));

// if ( number % 2 === 0 ) {
//     alert(number);
// } else {
//     alert(++number);
// }


//SNACK 3

// var nomi = ["Pierino", "Gigino", "Erminio", "Asdrubale", "Gosbesto"];

// var cognomi = ["Dartagnan", "Giantoneston", "Zaccanasta", "Culin", "Fuckingtime"];

// var nTimes = 3;

// var fakeName = [];

// var choose;

// var surnameChoose;

// for ( var i = 0; i < nTimes; i++ ) {
//     choose = Math.floor(Math.random() * nomi.length);
//     surnameChoose = Math.floor(Math.random() * cognomi.length);
//     fakeName.push(nomi[choose] + " " + cognomi[surnameChoose]);
// }

// console.log(fakeName);


//SNACK 4

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     if ( i % 2 !== 0) {
//         console.table(numbers[i]);
//         sum += numbers[i];
//     }
// }

// console.log(sum);


//SNACK 5

var array1 = [];

var array2 = [];

var array1Clean = [];

var array2Clean = [];

var randoNumbers;

var quantity1 = Math.floor(Math.random() * 100 + 1);

var quantity2 = Math.floor(Math.random() * 100 + 1);

// ARRAY GENERATOR
for (var i = 0; i < quantity1; i++) {
    randoNumbers = Math.floor(Math.random() * 100 + 1);
    array1.push(randoNumbers);
}

for (var k = 0; k < quantity2; k++) {
    randoNumbers = Math.floor(Math.random() * 100 + 1);
    array2.push(randoNumbers);
}

//REMOVE CLONES
function clean1(){
    for (var ko = 0; ko < array1.length; ko++){
        var isNew = true;
    
        for (var jo = 0; jo < array1Clean.length; jo++){
            if(array1Clean[jo] === array1[ko]) {
                isNew = false;
            }
            if(jo === array1Clean.length -1){
                if (isNew === true){
                    array1Clean.push(array1[ko]);
                }
            }
        }
        if (array1Clean.length === 0) {
            array1Clean.push(array1[ko]);
        }
    }
}

function clean2(){
    for (var ky = 0; ky < array2.length; ky++){
        var isNew = true;
    
        for (var jy = 0; jy < array2Clean.length; jy++){
            if(array2Clean[jy] === array2[ky]) {
                isNew = false;
            }
            if(jy === array2Clean.length -1){
                if (isNew === true){
                    array2Clean.push(array2[ky]);
                }
            }
        }
        if (array2Clean.length === 0) {
            array2Clean.push(array2[ky]);
        }
    }
}

clean1();

clean2();

//PRINT FIRST ARRAY
function printArray(){
    var items = "";

var list = "";

var counter = 0;

while (counter < array1.length) {
    items += "<li>" + array1[counter] + "</li>";
    counter++;
}

 document.getElementById("list1").innerHTML = items;


 var counters = 0;

 while (counters < array2.length) {
    list += "<li>" + array2[counters] + "</li>";
    counters++;
}

 document.getElementById("list2").innerHTML = list;
}

// INCREMENTAL ARRAY + NEW NUMBER CLONE REMOVER
while (array1Clean.length < array2Clean.length) {
    randoNumbers = Math.floor(Math.random() * 100 + 1);
    if(array1Clean.indexOf(randoNumbers === - 1)){
        array1Clean.push(randoNumbers);
    }
}

while (array2Clean.length < array1Clean.length) {
    randoNumbers = Math.floor(Math.random() * 100 + 1);
    if(array2Clean.indexOf(randoNumbers === - 1)){
        array2Clean.push(randoNumbers);
    }
}

console.table(array1Clean);

console.table(array2Clean);

//MAKE SAME LENGHT
function incrementArray(){
    var items = "";

var list = "";

var counter = 0;

while (counter < array1Clean.length) {
    items += "<li>" + array1Clean[counter] + "</li>";
    counter++;
}

 document.getElementById("list1").innerHTML = items;


 var counters = 0;

 while (counters < array2Clean.length) {
    list += "<li>" + array2Clean[counters] + "</li>";
    counters++;
}

 document.getElementById("list2").innerHTML = list;
}