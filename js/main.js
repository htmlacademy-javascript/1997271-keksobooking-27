import { createCard } from './popup.js';
import { createSimilarOffers } from './app.js';

const similarOffers = createSimilarOffers();

createCard(similarOffers[0]);
