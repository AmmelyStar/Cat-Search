const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "ive_rvW2fNQsV1F5ndG4nRUTL80oB7gnm9mRENenNK0bFaae9z95D31awypoySky0fpC";

export function fetchBreeds () {

    return fetch(`${BASE_URL}/breeds?key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        })
    .catch(() =>
                Notiflix.Notify.warning(
                    `Oops! Something went wrong! Try reloading the page!`));
};

export function fetchCatByBreed(breedId) {
    
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        })
    .catch(() =>
                Notiflix.Notify.warning(
                    `Oops! Something went wrong! Try reloading the page!`));
    
}


















// import axios from "axios";


// const BASE_URL = "https://api.thecatapi.com/v1";
// const API_KEY = "ive_rvW2fNQsV1F5ndG4nRUTL80oB7gnm9mRENenNK0bFaae9z95D31awypoySky0fpC";



// export function fetchBreeds () {

//     return axios
//         .get(`${BASE_URL}/breeds?key=${API_KEY}`)
//         .then((resp) => {
//             // console.log(resp);
//             return resp.json();
//         })
//         .catch (err => {
//                 console.log(err);
//             });
// };

// export function fetchCatByBreed(breedId) {
    
//     return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&key=${API_KEY}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }
//             return resp.json();
//     })
    
// }

// export function fetchCatByBreed(breedId) {
//     return axios.get(`${url}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//     .catch (err => {
//                 console.log(err);
//             });
// };


// function fetchBreeds () {

//     return fetch(`${BASE_URL}/breeds?key=${API_KEY}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }
//             return resp.json();
//         })
//         .then(data => {
           
//             const breedMarkup = data
//                 .map(({ id, name }) => {
//                     return `<option value = ${id}>${name}</option>`;
//                 })
//                 .join('');
//             elements.select.insertAdjacentHTML('beforeend', breedMarkup)
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };

// fetchBreeds();

// export function fetchBreeds () {

//     return axios.get(`${BASE_URL}/breeds?key=${API_KEY}`)
        
//         .then(resp => {
       
//             const breedMarkup = resp.data
//                 .map(({ id, name }) => {
//                     return `<option value = ${id}>${name}</option>`;
//                 })
//                 .join('');
//             elements.select.insertAdjacentHTML('beforeend', breedMarkup)
//         })
        
//         .catch (err => {
//                 console.log(err);
//             });
// };

// export function fetchCatByBreed(breedId) {
    
//     return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&key=${API_KEY}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }
//             return resp.json()
        
//         .catch(err => {
//             console.log(err);
//         })
//     })
    
// }
 