
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed} from './cat-api';

const elements = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error')
}


elements.loader.style.visibility = 'hidden';
elements.error.style.visibility = 'hidden';

fetchBreeds()
    
    .then(data => {
           
        const breedMarkup = data
            .map(({ id, name }) => {
                return `<option value = ${id}>${name}</option>`;
            })
            .join('');
        elements.select.insertAdjacentHTML('beforeend', breedMarkup);
        new SlimSelect({
            select: elements.select
        })
        
    })
    .catch(() =>
                Notiflix.Notify.warning(
                    `Oops! Something went wrong! Try reloading the page!`));
    
elements.select.addEventListener('change', selectCat);


    

function selectCat(event) {
    event.preventDefault();
    elements.catInfo.innerHTML = '';

    let breedId = event.target.value;
    elements.loader.style.visibility = 'visible';
    elements.catInfo.style.visibility = 'hidden';
    

    fetchCatByBreed(breedId)
        
        .then(data => { 
            const cat = data               
             .map(({ url }) => {
          return `<img src="${url}" alt="cat" width=500/>`;
        })
                .join('');
            elements.catInfo.insertAdjacentHTML('afterbegin', cat)
            
           
        })
     .catch(() =>
                Notiflix.Notify.warning(
                    `Oops! Something went wrong! Try reloading the page!`));
    
    


    fetchBreeds()
        .then(data => {
            const selectedBreed = data.find(breed => breed.id === breedId);
            
           
            const infoDescription = selectedBreed.description;
            const infoTemperament = selectedBreed.temperament;
            const infoName = selectedBreed.name;
            
            const infoAboutCat = `<div class="cat-container">
                         <h1>${infoName}</h1>
                         <p>${infoDescription}</p>
                        <p><b>Temperament:</b> ${infoTemperament}</p>` 
            elements.catInfo.insertAdjacentHTML('beforeend', infoAboutCat);
            elements.loader.style.visibility = 'hidden';
             elements.catInfo.style.visibility = 'visible';
        })
     .catch(() =>
                Notiflix.Notify.warning(
                    `Oops! Something went wrong! Try reloading the page!`));

}