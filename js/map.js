import { getData } from './server.js';
import { addAdFormAction } from './form.js';
import { initSlider } from './slider.js';
import { createCard } from './popup.js';
import { engageAdForm, engageFilterForm } from './form-initialization.js';
import { renderGetErrorMessage } from './error.js';
import { filterListeners } from './filter.js';

const START_LOCATION = {
  lat: 35.68172,
  lng: 139.75392,
};
const DECIMALS = 5;
const OFFERS_COUNTER = 10;
const MAP_ZOOM = 12;

const addressInput = document.querySelector('#address');
const interactiveMap = L.map('map-canvas');
const markerGroup = L.layerGroup();

let interactiveMarker;
let marker;

const setStartAddressValue = () => {
  addressInput.value = `${START_LOCATION.lat}, ${START_LOCATION.lng}`;
};

const setAttributeInput = () => {
  addressInput.setAttribute('readonly', 'readonly');
};

const setLocation = (target) => {
  const location = target.getLatLng();
  addressInput.value = `${location.lat.toFixed(
    DECIMALS
  )}, ${location.lng.toFixed(DECIMALS)}`;
};

const onMarkerMove = (evt) => setLocation(evt.target);

const addMarkerGroup = (data) => {
  markerGroup.addTo(interactiveMap);
  data
    .slice()
    .slice(0, OFFERS_COUNTER)
    .forEach((offer) => {
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

const rerenderMarkers = (data) => {
  markerGroup.clearLayers();
  addMarkerGroup(data);
};

const resetMap = () => {
  getData(rerenderMarkers, renderGetErrorMessage);
  interactiveMarker.setLatLng(START_LOCATION);
  interactiveMap.setView(START_LOCATION, MAP_ZOOM);
  interactiveMap.closePopup();
};

const activateAddForm = () => {
  engageAdForm();
  setStartAddressValue();
  initSlider();
  addAdFormAction();
  setAttributeInput();
};

const onDataCallback = (data) => {
  rerenderMarkers(data);
  engageFilterForm();
  filterListeners(data);
};

const initMap = () => {
  interactiveMap
    .on('load', () => {
      getData(onDataCallback, renderGetErrorMessage);
      activateAddForm();
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

export { initMap, resetMap, setStartAddressValue, rerenderMarkers };
