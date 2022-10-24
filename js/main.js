import { createCard } from './popup.js';
import { createSimilarOffers } from './data.js';

const similarOffers = createSimilarOffers();

createCard(similarOffers[0]);
