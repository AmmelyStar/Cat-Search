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

















