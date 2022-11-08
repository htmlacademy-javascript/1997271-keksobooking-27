import { engageAdForm, engageFilterForm } from './form-initialization.js';
import { createCard } from './popup.js';
import { addAdFormAction } from './form.js';
import { createSimilarOffers } from './data.js';
import { initSlider } from './slider.js';

const START_LOCATION = {
  lat: 35.68172,
  lng: 139.75392,
};

const DECIMALS = 5;
const MAP_ZOOM = 12;

const data = createSimilarOffers();

const addressInput = document.querySelector('#address');
const interactiveMap = L.map('map-canvas');
const markerGroup = L.layerGroup();

let interactiveMarker;
let marker;

const setStartAddressValue = () => {
  addressInput.value = `${START_LOCATION.lat}, ${START_LOCATION.lng}`;
};

const setLocation = (target) => {
  const location = target.getLatLng();
  addressInput.value = `${location.lat.toFixed(
    DECIMALS
  )}, ${location.lng.toFixed(DECIMALS)}`;
};

const addMarkerGroup = () => {
  markerGroup.addTo(interactiveMap);
  data.forEach((offer) => {
    marker = L.marker(offer.location, {
      icon: L.icon({
        iconUrl: './img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      }),
    });
    marker.addTo(markerGroup).bindPopup(createCard(offer));
  });
};

const onMarkerMove = (evt) => setLocation(evt.target);

const activateAdForm = () => {
  addMarkerGroup();
  engageAdForm();
  addAdFormAction();
  setStartAddressValue();
  initSlider();
};

const initMap = () => {
  interactiveMap
    .on('load', () => {
      activateAdForm();
      engageFilterForm();
    })
    .setView(START_LOCATION, MAP_ZOOM);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    foo: 'bar',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(interactiveMap);

  interactiveMarker = L.marker(START_LOCATION, {
    draggable: 'true',
    icon: L.icon({
      iconUrl: './img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    }),
  }).addTo(interactiveMap);

  interactiveMarker.on('move', onMarkerMove);
};

export { initMap };
