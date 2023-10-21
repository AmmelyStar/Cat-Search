// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "твій ключ";

import { fetchBreeds, fetchCatByBreed} from './cat-api';

const elements = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error')
}


fetchBreeds()
    .then(data => {
           
        const breedMarkup = data
            .map(({ id, name }) => {
                return `<option value = ${id}>${name}</option>`;
            })
            .join('');
        elements.select.insertAdjacentHTML('beforeend', breedMarkup)
    });
    
elements.select.addEventListener('change', selectCat);

function selectCat(event) {
    event.preventDefault();

    let breedId = event.target.value;

    fetchCatByBreed(breedId)
        
        .then(data => { 
            const cat = data               
             .map(({ url }) => {
          return `<img src="${url}" alt="cat" width=500/>`;
        })
                .join('');
            elements.catInfo.insertAdjacentHTML('afterbegin', cat)
        })
    


    fetchBreeds()
        .then(data => {
            const infoDescription = data[0].description;
            const infoTemperament = data[0].temperament;
            const infoName = data[0].name
            
            const infoAboutCat = `<div class="cat-container">
                         <h1>${infoName}</h1>
                         <p>${infoDescription}</p>
                        <p><b>Temperament:</b> ${infoTemperament}</p>` 
            elements.catInfo.insertAdjacentHTML('beforeend', infoAboutCat);
     })

}
