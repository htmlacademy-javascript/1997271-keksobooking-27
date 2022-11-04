import { createCard } from './popup.js';
import { createSimilarOffers } from './data.js';
import { adSendFormAction } from './form.js';

const similarOffers = createSimilarOffers();

createCard(similarOffers[0]);
adSendFormAction();
