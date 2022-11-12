const renderElement = (container, element) => {
  container.insertAdjacentHTML('beforeend', element);
};

const isEscEvt = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {isEscEvt, renderElement};
