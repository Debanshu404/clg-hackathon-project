import {plantData} from './data.js'
const container = document.querySelector('.cards');

plantData.splice(0,5).forEach((plant) => {
    console.log('Image URL:', plant.image); // Debugging: Check URL in the console

    // Create card HTML
    const cardHTML = `
       
          
   
  <li>
    <a href="" class="card">
      <img src="${plant.image}" class="card__image" alt="plant.name" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">${plant.name}</h3>            
            <span class="card__status">purpouse:${plant.purpose}</span>
          </div>
        </div>
        <p class="card__description">Origin:${plant.origin}</p>
        <p class="card__description">ClimaticCondition:${plant.climaticCondition}</p>
        <p class="card__description">Purpouse${plant.purpose}</p>
        <p class="card__description">MedicinalProperty:${plant.medicinalProperty}</p>
        <p class="card__description">PlantId:${plant.id}</p>
      </div>
    </a>      
  </li>
  <li>

      
    `;

// <div class="card">
//                 <div class="content">
//                     <!-- Front Side of the Card -->
//                     <div class="front">
//                         <img class="frontimg" src="${plant.image }" alt="${plant.name}">
//                         <h2>Plant Name: ${plant.name}</h2>
//                     </div>
//                     <!-- Back Side of the Card -->
//                     <div class="back">
//                         <p><strong>Origin:</strong> ${plant.origin}</p>
//                         <p><strong>Climatic Condition:</strong> ${plant.climaticCondition}</p>
//                         <p><strong>Availability:</strong> ${plant.availability}</p>
//                         <p><strong>Purpose:</strong> ${plant.purpose}</p>
//                         <p><strong>Medicinal Property:</strong> ${plant.medicinalProperty}</p>
//                         <a href="plant-details.html?id=${plant.id}" class="read-more-btn">Read More</a>
//                     </div>
//                 </div>
//             </div>

//     // Append card HTML to container
    container.innerHTML += cardHTML;
});
