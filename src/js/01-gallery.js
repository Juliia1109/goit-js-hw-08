// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const paletteContainer = document.querySelector('.gallery');
console.log(paletteContainer);
const cardsMarkup = createGalleryItemsCardMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

function createGalleryItemsCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
           
            <a class="gallery__item" href="${original}">
               <img 
                   class="gallery__image" 
                   src="${preview}" 
                   alt="${description}" 
                   />
            </a>
          
            `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
