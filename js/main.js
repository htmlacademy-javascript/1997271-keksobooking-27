import { createCard } from './popup.js';
import { createSimilarOffers } from './data.js';
import { adSendFormAction } from './form.js';
import { activateForms } from './form-initialization.js';

const similarOffers = createSimilarOffers();

createCard(similarOffers[0]);
adSendFormAction();
activateForms();
