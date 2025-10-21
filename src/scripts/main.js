'use strict';

// write your code here
const countriesOl = document.querySelectorAll('.list__item');

let totalPopulation = 0;
let averagePopulation = 0;
const populationList = [];

for (const countryHtml of countriesOl) {
  const population = Number(
    countryHtml.querySelector('.population').textContent.replace(/,/g, ''),
  );

  populationList.push(Number(population));

  totalPopulation = totalPopulation + Number(population);
}

averagePopulation = totalPopulation / populationList.length;

const totalHtmlObj = document.querySelector('.total-population');
const averageHtmlObj = document.querySelector('.average-population');

averageHtmlObj.textContent = averagePopulation.toLocaleString();
totalHtmlObj.textContent = totalPopulation.toLocaleString();
