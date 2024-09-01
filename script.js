import { plantData } from './data.js';

// Loader
setTimeout(function() {
    let loader = document.querySelector("#loader");
    loader.style.top = "-100vh";

    // Start h1 and video animations after the loader disappears
    setTimeout(function() {
        loadinganimationh1();
        loadinganimationvideo();
    }, 500); // Adjust this delay to match the loader's exit timing

}, 4200);
//button animation
let link = document.querySelector(".link");
let pink = document.querySelector(".color");

let hoverTL = gsap.timeline();
hoverTL.pause();

// from, to, fromTo Tweens
hoverTL.to(pink, {
  width: "calc(100% + 1.3em)",
  ease: "Elastic.easeOut(0.25)",
  duration: 0.4
});
hoverTL.to(pink, {
  width: "2em",
  left: "calc(100% - 1.45em)",
  ease: "Elastic.easeOut(0.4)",
  duration: 0.6
});

link.addEventListener("mouseenter", () => {
  hoverTL.play();
});

link.addEventListener("mouseleave", () => {
  hoverTL.reverse();
});


// GSAP animations
const videoanimation = () => {
    var video = document.querySelector('#video-container');
    var playbtn = document.querySelector("#play");

    video.addEventListener('mouseenter', function() {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        });
    });

    video.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        });
    });

    video.addEventListener("mousemove", function(dets) {
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 80
        });
    });
};
videoanimation();

const loadinganimationh1 = () => {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.4,
        duration: 0.9,
        stagger: 0.3
    });
};

const loadinganimationvideo = () => {
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.3
    });
};

// Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Navigation animation
function navAnimation() {
    var nav = document.querySelector(".nav-elem");

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.4,
            ease: "power2.out"
        });
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.05
        }, "-=0.3");
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.4
            },
            ease: "power2.out"
        }, "-=0.2");
    });

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();
        tl.to(".nav-part2 h5 span", {
            y: 50,
            stagger: {
                amount: 0.3
            },
            ease: "power2.in"
        });
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.05
        }, "-=0.2");
        tl.to("#nav-bottom", {
            height: "0vh",
            duration: 0.4,
            ease: "power2.in",
            delay: 0.1
        });
    });
}

navAnimation();

// Hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', function () {
    this.classList.toggle('menu-opened');
    document.getElementById('nav-bottom').classList.toggle('menu-opened');
});

// Custom cursor
document.addEventListener("mousemove", function(dets) {
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y
    });
});

// Cursor effects for .child elements
document.querySelectorAll(".child").forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        gsap.to('#cursor', {
            scale: 1
        });
    });
    elem.addEventListener("mouseleave", function() {
        gsap.to('#cursor', {
            scale: 0
        });
    });
});

// Page 6 animations
function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    });
}
page6Animations();
console.log("now",plantData)
// Extract plant data



// // Usage example
// const allPlantData = extractPlantData();
// console.log(allPlantData);

const container = document.querySelector('.card-contents');

plantData.forEach((plant) => {
    console.log('Image URL:', plant.image); // Debugging: Check URL in the console

    // Create card HTML
    const cardHTML = `
       
            <div class="card">
                <div class="content">
                    <!-- Front Side of the Card -->
                    <div class="front">
                        <img class="frontimg" src="${plant.image }" alt="${plant.name}">
                        <h2>Plant Name: ${plant.name}</h2>
                    </div>
                    <!-- Back Side of the Card -->
                    <div class="back">
                        <p><strong>Origin:</strong> ${plant.origin}</p>
                        <p><strong>Climatic Condition:</strong> ${plant.climaticCondition}</p>
                        <p><strong>Availability:</strong> ${plant.availability}</p>
                        <p><strong>Purpose:</strong> ${plant.purpose}</p>
                        <p><strong>Medicinal Property:</strong> ${plant.medicinalProperty}</p>
                        <a href="plant-details.html?id=${plant.id}" class="read-more-btn">Read More</a>
                    </div>
                </div>
            </div>
      
    `;


// `    <ul class="cards">
//   <li>
//     <a href="" class="card">
//       <img src="${plant.image}" class="card__image" alt="plant.name" />
//       <div class="card__overlay">
//         <div class="card__header">
//           <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
//           <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
//           <div class="card__header-text">
//             <h3 class="card__title">${plant.name}</h3>            
//             <span class="card__status">purpouse:${plant.purpose}</span>
//           </div>
//         </div>
//         <p class="card__description">${plant.origin}</p>
//         <p class="card__description">${plant.climaticCondition}</p>
//         <p class="card__description">${plant.purpose}</p>
//         <p class="card__description">${plant.medicinalProperty}</p>
//         <p class="card__description">${plant.id}</p>
//       </div>
//     </a>      
//   </li>
//   <li>
//    
// </ul>`

    // Append card HTML to container
    container.innerHTML += cardHTML;
});










// function renderPagination(totalItems, currentPage) {
//     const paginationContainer = document.getElementById('pagination-container');
//     paginationContainer.innerHTML = '';

//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     for (let i = 1; i <= totalPages; i++) {
//         const button = document.createElement('button');
//         button.textContent = i;
//         button.classList.add('pagination-btn');
//         if (i === currentPage) {
//             button.classList.add('active');
//         }
//         button.onclick = () => {
//             currentPage = i;
//             renderCards(plantData, currentPage);
//         };
//         paginationContainer.appendChild(button);
//     }
// }

// Initialize the first page
// renderCards(plantData, currentPage);
