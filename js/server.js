const getData = async (onSuccess, onFail) => {
  try {
    const data = await fetch(
      'https://27.javascript.pages.academy/keksobooking/data'
    );

    if (!data.ok) {
      throw new Error('Не удалось загрузить объявление(');
    }

    const offers = await data.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

export { getData };
