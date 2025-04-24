//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
    [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
    [4, 'Pathanamthitta', 20000, 2000, 45000, 22000, 1500],
    [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
    [6, 'Palakkad', 12000, 1000, 20000, 23000, 3400],
    [7, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
    [8, 'Kollam', 14000, 2500, 25000, 18000, 2700]

]
//1. district having Highest +ve case 
console.log('---1. district having Highest +ve case -------');

district_name = covid_data.reduce((data1, data2) => data1[2] > data2[2] ? data1 : data2) //we get a new array
console.log(district_name[1]);//from that 1st index

// console.log(covid_data.reduce((data1, data2) => data1[2] > data2[2] ? data1: data2)[1]);

console.log('------------');

//2. district having Highest 1st dose vaccine
console.log('-----2. district having Highest 1st dose vaccine-------');

console.log(covid_data.reduce((dose1, dose2) => dose1[5] > dose2[5] ? dose1 : dose2)[1]);

console.log('------------');


//3. district having lowest death rate

console.log('--3. district having lowest death rate---');
console.log(covid_data.reduce((rate1,rate2)=>rate1[3]<rate2[3]?rate1:rate2)[1]); 

console.log('------------');
//4. sort data with +ve case in descending order
console.log('--4. sort data with +ve case in descending order----');

covid_data.sort((a,b)=>b[2]-a[2]).forEach((items)=>console.log(items));

console.log('------------');
//5. is district with +ve cases > 15000
console.log('--5. is district with +ve cases > 15000---');
console.log(covid_data.some((items)=>items[2]>15000)?'yes with +ve':'no +ve cases');


console.log('------------');
//6. sort data with 1st dose vaccine ascending order
console.log('--6. sort data with 1st dose vaccine ascending order----');

covid_data.sort((a,b)=>a[2]-b[2]).forEach((items)=>console.log(items));

console.log('------------');
//7. Print Thrissur details
console.log('- Print Thrissur details---');

console.log(covid_data.filter((items)=>items[1]=='Thrissur'));


console.log('------------');
//8. Print total number of positive cases
console.log('---8. Print total number of positive cases----');

console.log(covid_data.map((covid)=>covid[2]).reduce((total1,total2)=>total1+total2));

console.log('------------');
//9. Print total number of curred cases
console.log('--9. Print total number of curred cases--');

total=covid_data.map((items)=>items[4]).reduce((case1,case2)=>case1+case2)
console.log(total);
console.log('----------- ̰-');
//10. Print curred cases in Idukki
console.log('---10. Print curred cases in Idukki----');

console.log(covid_data.find((items)=>items[1]=='Idukki')[4]);
console.log('------------');




//test case:
// const highestFirstDoseRow = covid_data.reduce((dose1, dose2) => {
//     console.log(`Comparing ${dose1[1]} (${dose1[5]}) with ${dose2[1]} (${dose2[5]})`);
//     return Number(dose1[5]) > Number(dose2[5]) ? dose1 : dose2;
//   });
  
//   console.log("District with highest 1st dose:", highestFirstDoseRow[1]);
//   console.log("1st dose count:", highestFirstDoseRow[5]);