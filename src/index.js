// import axios from "axios";

//  axios.defaults.headers.common["x-api-key"] = API_KEY;

// import { fetchBreeds, fetchCatByBreed } from './cat-api';

// const BASE_URL = "https://api.thecatapi.com/v1";
// const API_KEY = "ive_rvW2fNQsV1F5ndG4nRUTL80oB7gnm9mRENenNK0bFaae9z95D31awypoySky0fpC";

const elements = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error')
}
// console.log(elements.select);

// console.log(fetchBreeds);
// console.log(fetchCatByBreed);

// elements.select.addEventListener('change', selectCat);


// function selectCat(event) {
//     event.preventDefault();

//     const breedId = event.currentTarget.value;

//     fetchBreeds()
//         .then(elements.catInfo.innerHTML = `
//    <div class="cat-img">
//      <img src="${url}" alt="${breeds[0].name}" width="300"/>
//      </div>
//      <div class="cat-container">
//      <h1>${breeds[0].name}</h1>
//      <p>${breeds[0].description}</p>
//      <p><b>Temperament:</b> ${breeds[0].temperament}</p>
//    </div>
//     `)
//         .catch(err => {
//         console.log(err);
//     })

//     // fetchCatByBreed(breedId);

    
    
// };

// fetchBreeds();
    



// Під час завантаження сторінки має виконуватися HTTP - запит за колекцією порід.Для цього необхідно виконати
// GET - запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту,
//  необхідно наповнити select.breed - select опціями
// так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.

// export const fetchCountries = name => {
//   const BASE_URL = 'https://restcountries.com/v3.1/name/';
//   const properties = 'fields=name,capital,population,flags,languages';

//   return fetch(`${BASE_URL}${name}?${properties}`).then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };