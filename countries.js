const countries = [{ name: 'USa', population: 1372894, continent: "north america", capital: 'washington,dc' },
{ name: 'china', population: 1372894839, continent: "asia", capital: 'beijing' },
{ name: 'Uk', population: 172894, continent: "europe", capital: 'london' },
{ name: 'south africa', population: 372894, continent: "africa", capital: 'prtoria cape town ,bloemfontein' }

]
//1.print the names of all countries

for (i in countries) {
    console.log(countries[i].name);

}
//2.find the country with the largest population
let popu = countries.reduce((pop1, pop2) => pop1.population > pop2.population ? pop1 : pop2)
console.log(popu);

//3.find the total poipulation of all countries
let total = countries.reduce((pop1, pop2) => pop1.population + pop2.population)
console.log(total);
