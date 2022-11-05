import { activateForms, deactivateForms } from './form-initialization.js';
import { createCard } from './popup.js';
import { createSimilarOffers } from './data.js';

const addressField = document.querySelector('#address');
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

deactivateForms();

const MainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.6831,
    lng: 139.75322,
  },
  { draggable: true, icon: MainPinIcon }
);

const createMap = () => {
  map
    .on('load', () => {
      activateForms();
    })
    .setView(
      {
        lat: 35.68457,
        lng: 139.74889,
      },
      13
    );
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  mainMarker.addTo(map);
};

const createPins = (offers) => {
  const adPinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  offers.forEach((offer) => {
    const marker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      { icon: adPinIcon }
    );
    marker.addTo(markerGroup).bindPopup(createCard(offer));
  });
};

const onAddressFieldMove = (evt) => {
  const lat = evt.latlng.lat;
  const lng = evt.latlng.lng;
  addressField.value = `${+lat.toFixed(5)},${+lng.toFixed(5)}`;
};

const adRenderMapListeners = () => {
  mainMarker.on('move', onAddressFieldMove);
};

const adRenderMap = () => {
  createMap();
  createPins(createSimilarOffers());
  adRenderMapListeners();
};

export { adRenderMap };
