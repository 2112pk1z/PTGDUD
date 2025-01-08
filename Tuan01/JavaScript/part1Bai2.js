let massMark = 78
let heightMark = 1.69
let massJohn = 92
let heightJohn = 1.95

let massMark2 = 95
let heightMark2 = 1.88
let massJohn2 = 85
let heightJohn2 = 1.76

function tinhBMI(mass, height){
    return mass/(height*height)
}

let BMIMark = tinhBMI(massMark, heightMark);
let BMIJohn = tinhBMI(massJohn, heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

let BMIMark2 = tinhBMI(massMark2, heightMark2);
let BMIJohn2 = tinhBMI(massJohn2, heightJohn2);
let markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log('Bộ dữ liệu test 1:'); 
console.log('BMI của Mark:', BMIMark.toFixed(2));
console.log('BMI của John:', BMIJohn.toFixed(2));
if(markHigherBMI){
    console.log('BMI của Mark cao hơn John'); 
} else{
    console.log('BMI của John cao hơn Mark'); 
}

console.log('Bộ dữ liệu test 2:'); 
console.log('BMI của Mark:', BMIMark2.toFixed(2));
console.log('BMI của John:', BMIJohn2.toFixed(2));
if(markHigherBMI2){
    console.log('BMI của Mark cao hơn John'); 
} else{
    console.log('BMI của John cao hơn Mark'); 
}

