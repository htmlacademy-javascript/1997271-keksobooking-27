import { debounce } from './utils.js';
import { rerenderMarkers } from './map.js';

const DEFAULT_VALUE = 'any';
const RERENDER_DELAY = 500;

const housePrice = {
  low: {
    from: 0,
    to: 10000,
  },
  middle: {
    from: 10000,
    to: 50000,
  },
  high: {
    from: 50000,
    to: 100000,
  },
};

const filterForm = document.querySelector('.map__filters');
const typeFilter = filterForm.querySelector('#housing-type');
const priceFilter = filterForm.querySelector('#housing-price');
const roomsFilter = filterForm.querySelector('#housing-rooms');
const guestsFilter = filterForm.querySelector('#housing-guests');
const featuresFilter = filterForm.querySelector('#housing-features');

const typeCheck = (data) =>
  typeFilter.value === DEFAULT_VALUE || typeFilter.value === data.offer.type;

const priceCheck = (data) =>
  priceFilter.value === DEFAULT_VALUE ||
  (data.offer.price > housePrice[priceFilter.value].from &&
    data.offer.price < housePrice[priceFilter.value].to);

const roomsCheck = (data) =>
  roomsFilter.value === DEFAULT_VALUE ||
  +roomsFilter.value === data.offer.rooms;

const guestsCheck = (data) =>
  guestsFilter.value === DEFAULT_VALUE ||
  +guestsFilter.value === data.offer.guests;

const featuresCheck = (data) => {
  const checkedCheckboxes = Array.from(
    featuresFilter.querySelectorAll('input[type="checkbox"]:checked')
  );
  const dataFeatures = data.offer.features;
  if (dataFeatures) {
    return checkedCheckboxes.every((feature) =>
      dataFeatures.includes(feature.value)
    );
  }
};

const getFilteredOffers = (data) =>
  data.filter(
    (value) =>
      typeCheck(value) &&
      priceCheck(value) &&
      roomsCheck(value) &&
      guestsCheck(value) &&
      featuresCheck(value)
  );

const onFormFilterChange = (data) => {
  const filteredOffers = getFilteredOffers(data);
  rerenderMarkers(filteredOffers);
};

const filterListeners = (offer) => {
  filterForm.addEventListener(
    'change',
    debounce(() => onFormFilterChange(offer), RERENDER_DELAY)
  );
};

export { filterListeners };
