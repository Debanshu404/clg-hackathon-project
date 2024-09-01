import { plantData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const plantId = getQueryParam('id');
    console.log(plantId);

    const plant = plantData.find(p => p.id === parseInt(plantId));
console.log(plant)
    if (plant) {
        document.getElementById('plant-name').textContent = plant.name;
        document.getElementById('plant-image').src = plant.image;
        document.getElementById('plant-image').alt = plant.name;
        document.getElementById('plant-origin').textContent = plant.origin;
        document.getElementById('plant-climatic-condition').textContent = plant.climaticCondition;
        document.getElementById('plant-availability').textContent = plant.availability;
        document.getElementById('plant-purpose').textContent = plant.purpose;
        document.getElementById('plant-medicinal-property').textContent = plant.medicinalProperty;
    } else {
        document.querySelector('.plant-details').innerHTML = '<p>Plant not found.</p>';
    }
});
